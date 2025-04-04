import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = async () => {
  const user = await getCurrentUser();

  if (!user?.id) {
    // Handle the case when there is no current user
    return <p>No user logged in.</p>;
  }

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user.id),
    await getLatestInterviews({userId: user.id})
  ]);

  const hasPastInterviews = userInterviews.length > 0;
  const hasUpcomingInterviews = latestInterviews.length > 0;


  return (
    <>
        <section className='card-cta'>
          <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Complete an interview with our AI-powered HR assistant</h2>
            <p className='text-lg'>
              Please select your interview
            </p>
            <Button asChild className='btn-primary max-sm:w-full'>
              <Link href="/interview">Start your interview</Link>
            </Button>
          </div>
          <Image src="/robot.png" alt='robo-hr' width={400} height={400} className='max-sm:hidden' />
        </section>
        <section className='flex flex-col gap-6 mt-8'>
          <h2>Your Interviews</h2>
          <div className='interviews-section'>
                {hasPastInterviews ? (
                    userInterviews?.map((interview) => (
                      <InterviewCard {... interview} key={interview.id}/>
                    ))) : (

                      <p>You haven&apos;t taken any interviews yet.</p>
                      
                )}
          </div>
        </section>
        <section className='flex flex-col gap-6 mt-8'>
          <h2>Pick an Interview</h2>
            <div className='interviews-section'>
            {hasUpcomingInterviews ? (
                    latestInterviews?.map((interview) => (
                      <InterviewCard {... interview} key={interview.id}/>
                    ))) : (

                      <p>There are no new interviews available.</p>
                      
                )}

          
            </div>
        </section>
    </>
  )
}

export default Page