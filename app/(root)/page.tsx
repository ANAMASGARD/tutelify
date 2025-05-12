import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();  
  const[userInterviews, latestInterviews ] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({userId :user?.id!})
  ]);
  // const userInterviews = await getInterviewsByUserId(user?.id!);
  // const latestInterviews = await getLatestInterviews({userId :user?.id!});


  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterviews?.length! > 0;


  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Exam-Ready with AI-Powered Tutor</h2>
          <p className="text-lg">
            Practice real exam, contest, interview questions & get instant feedback    📚📖📝
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start  Learning </Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

          <div className = "interview-section"> 
            {
           hasPastInterviews? (
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key ={interview.id}/>
              ))
            ) : (
              <p>You haven&apos;t taken any interview </p>
            )
            
          }

            </div>
         
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className = "interview-section"> 
            
          <div className = "interview-section"> 
             {
           hasUpcomingInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key ={interview.id}/>
              ))
            ) : (
              <p>There are no new interviews available </p>
            )
            
          }
            </div>
        </div>
      </section>

      </>
  );
}

export default page