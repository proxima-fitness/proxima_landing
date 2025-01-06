import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <h3 className="text-2xl font-bold">FREE</h3>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>5 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="text-white">Sign Up</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <h3 className="text-2xl font-bold">$29/month</h3>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>15 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="text-white">Sign Up</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lifetime</CardTitle>
              <h3 className="text-2xl font-bold">$99/month</h3>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Unlimited users</li>
                <li>Unlimited storage</li>
                <li>24/7 support</li>
                <li>Help center access</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="text-white">Sign Up</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
