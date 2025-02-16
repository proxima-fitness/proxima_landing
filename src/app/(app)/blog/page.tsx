/* eslint-disable @typescript-eslint/no-explicit-any */

import { BlogTest } from "@/components/BlogTest";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Blog | Proxima Fitness",
    description: "Interested in taking your gains to the next level ? Read our blog for new insights!",
};

  export default function Contact() {
    return (
        <>
            <div className="py-2 bg-[#33bbcf] gap-4 h-[auto] flex sm:flex-row flex-col items-center justify-center text-center text-lg font-bold text-white">
                <div>Looking to get in shape ? Try our free workout programs</div>
                <Link href={ `/programs` }>
                    <Button className="w-[auto] h-[auto] bg-black">
                        View Programs
                    </Button>
                </Link>
            </div>
            <div className={ ` bg-white flex items-center justify-center flex-col p-24` }>
                <BlogTest />
            </div>
        </>
    );
};
