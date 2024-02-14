import Image from "next/image";
import {
    Card, CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signin() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

                <Card className="w-[352px]">
                    <CardHeader>
                        <CardTitle className="text-[32px] font-semibold text-[rgba(0,0,0,0.9)]">Sign in</CardTitle>
                        <CardDescription>Stay updated on your professional world</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3 w-full">
                            <div>

                            <Input type="email" placeholder="Email" className="py-6 px-2 font-normal text-[18px] text-[rgba(0,0,0,0.9)]" />
                            </div>
                            <div>
                            <Input type="password" placeholder="Password" className="py-6 px-2 font-normal text-[18px] text-[rgba(0,0,0,0.9)]" />

                            </div>
                        </div>
                        <Button variant="link" className="text-[#0a66c2] text-base px-0 mt-2">Forgot Password?</Button>
                        <div>
                            <Button className="w-full rounded-full bg-[#0a66c2] mt-4 h-[52px]">Sign in</Button>
                        </div>
                        <div className="flex justify-between items-center gap-2 my-3">
                            <div className="h-0 w-full border-t">
                            </div>
                            <p className="text-sm text-[rgba(0,0,0,0.6)]">or</p>
                            <div className="h-0 w-full  border-t"></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="text-xs text-[rgba(0,0,0,0.9)]">
                                By clicking Continue, you agree to CandidateHub's
                                <div>
                                <a href="#" className="text-[#0a66c2]">User Agreement,</a>  <a href="#" className="text-[#0a66c2]">Privacy Policy,</a> and <a href="#" className="text-[#0a66c2]">Cookie Policy</a>.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <Button variant={'outline'} className="w-full rounded-full text-[#3c4043] flex items-center justify-center gap-2">
                                <div>
                                    <Image src={"../../../../svg/google.svg"} alt="google icon" height={18} width={18} priority/>
                                </div>
                                Continue with Google</Button>
                            <Button variant={'outline'} className="w-full rounded-full text-[#3c4043] flex items-center justify-center gap-2">
                            <div>
                                    <Image src={"../../../../svg/apple.svg"} alt="apple icon" height={24} width={24} priority/>
                                </div>
                                Sign in with Apple</Button>
                            <Button variant={'outline'} className="w-full rounded-full text-[#3c4043] flex items-center justify-center gap-2">
                            <div>
                                    <Image src={"../../../../svg/link.svg"} alt="link icon" height={21} width={20} priority/>
                                </div>
                                Sign in with a one-time link</Button>

                        </div>
                    </CardContent>
                </Card>
            </div>

        </main>
    );
}
