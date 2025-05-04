import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const page = () => {
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

        
            <p>You haven&apos;t taken any interviews yet</p>
         
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        
            <p>There are no interviews available</p>
          
        
      </section>

      </>
  );
}

export default page