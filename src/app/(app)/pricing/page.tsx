import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Pricing | Proxima Fitness",
    description: "Review our Pricing plans and our Free tier functionality",
};

export default function PricingPage() {
    return (
        <section className="w-full py-12 md:py-12 lg:py-12 flex justify-center items-center">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Pricing Plans</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
                        Select the best plan that fits your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic</CardTitle>
                            <h3 className="text-2xl font-bold">FREE</h3>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Library of 500+ Exercises with animations</li>
                                <li>Directory of 100+ free workout programs and growing community</li>
                                <li>AI Coach</li>
                                <li>Workout Program History Tracking</li>
                                <li>Program Creator</li>
                                <li>Workout Builder</li>
                                <li>AI Workout History Uploader</li>
                                <li>AI Workout Builder</li>
                                <li>Stats graphs</li>
                                <li>Consistency tracker</li>
                                <li>Social Gym Profile</li>
                                <li>Personal Records Tracking</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="text-white">Sign Up</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <h3 className="text-2xl font-bold">$19.99/month</h3>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Library of 500+ Exercises with animations</li>
                                <li>Directory of 100+ free workout programs and growing community</li>
                                <li>AI Coach</li>
                                <li>Workout Program History Tracking</li>
                                <li>Program Creator</li>
                                <li>Workout Builder</li>
                                <li>AI Workout History Uploader</li>
                                <li>AI Workout Builder</li>
                                <li>Stats graphs</li>
                                <li>Consistency tracker</li>
                                <li>Social Gym Profile</li>
                                <li>Personal Records Tracking</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="text-white">Sign Up</Button>
                        </CardFooter>
                    </Card>
                    {/* <Card>
            <CardHeader>
              <CardTitle>Lifetime</CardTitle>
              <h3 className="text-2xl font-bold">$99/month</h3>
            </CardHeader>
            <CardContent>
            <ul className="list-disc list-inside space-y-2">
                <li>Library of 500+ Exercises with animations</li>
                <li>Directory of 100+ free workout programs and growing community</li>
                <li>AI Coach</li>
                <li>Workout Program History Tracking</li>
                <li>Program Creator</li>
                <li>Workout Builder</li>
                <li>AI Workout History Uploader</li>
                <li>AI Workout Builder</li>
                <li>Stats graphs</li>
                <li>Consistency tracker</li>
                <li>Social Gym Profile</li>
                <li>Personal Records Tracking</li>
            </ul>
            </CardContent>
            <CardFooter>
              <Button className="text-white">Sign Up</Button>
            </CardFooter>
          </Card> */}
                </div>
            </div>
        </section>
    );
}
