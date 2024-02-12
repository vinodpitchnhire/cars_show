import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const buttonNames = [
    {
        buttonName: "Basic Details"
    },
    {
        buttonName: "Resume"
    },
    {
        buttonName: "Qualifications"
    },
    {
        buttonName: "Documentation"
    },
]


export default function Profile() {
    return (
        <main className="container px-6 border">
            <div className="px-2">

                <div className="flex justify-between items-center my-5">
                    <div className="">
                        Update Profile
                    </div>
                    <Button className="" variant={'outline'}>
                        Change Password
                    </Button>
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        {
                            buttonNames.map((el: any, index: any) => {
                                return (
                                    <Button key={`buttons ${index}`} className="bg-[#f5f5f5] text-xs rounded-[3px]" variant={'outline'}>
                                        {
                                            el.buttonName
                                        }
                                    </Button>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className="my-6 mx-2">
                            <div className="flex items-center gap-20">
                                <div className="mx-3">
                                    <div>
                                        <Image src={'/images/blank-profile-picture-973460_960_720.webp'} alt={'upload profile'} height={98} width={98} className="rounded-full" priority />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Button className="text-xs w-10 h-6" variant={'outline'}>
                                            Edit
                                        </Button>
                                        <Button className="text-xs w-14 h-6" variant={'outline'}>
                                            Delete
                                        </Button>
                                    </div>

                                </div>
                                <div className="flex items-center w-full gap-5">
                                    <div className="grid w-full max-w-sm items-center gap-1.5 ">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input type="text" id="fullName" placeholder="Full Name" />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" placeholder="Email" />
                                    </div>

                                </div>

                            </div>
                            <div className="my-6 flex items-center justify-between">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="mobile">Mobile</Label>
                                    <Input type="tel" id="mobile" placeholder="Mobile" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="mobile">Date of Birth</Label>
                                    <Input type="date" id="mobile" placeholder="" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="gender">Gender</Label>
                                    <Input type="text" id="gender" placeholder="" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                <div className="grid w-full gap-1.5">
                                    <Label htmlFor="message">Profile Summary</Label>
                                    <Textarea id="message" />
                                </div>
                                <div className="grid w-full max-w-full items-center gap-1.5">
                                    <Label htmlFor="skills">Skills</Label>
                                    <Input type="text" id="skills" placeholder="" />
                                </div>
                                <div className="grid w-full max-w-full items-center gap-1.5">
                                    <Label htmlFor="workLink">Work link/Portfolio</Label>
                                    <Input type="text" id="workLink" placeholder="" />
                                </div>
                                <div className="grid w-full max-w-full items-center gap-1.5">
                                    <Label htmlFor="profileURL">Social Profile URL</Label>
                                    <Input type="text" id="profileURL" placeholder="" />
                                </div>

                            </div>
                            <div className="my-6 flex items-center justify-between">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="currentSalary">Current Salary</Label>
                                    <Input type="number" id="currentSalary" placeholder="" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="currency">Salary Currency</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="inr">INR</SelectItem>
                                                <SelectItem value="usd">USD</SelectItem>
                                                <SelectItem value="eur">EUR</SelectItem>
                                                <SelectItem value="jyp">JYP</SelectItem>
                                                <SelectItem value="gbp">GBP</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="expectedSalary">Expected Salary</Label>
                                    <Input type="number" id="expectedSalary" placeholder="" />
                                </div>
                            </div>
                            <div className="my-6 flex items-center justify-between gap-3">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="currentSalary">Notice Period (Days)</Label>
                                    <Input type="number" id="currentSalary" placeholder="" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="currency">Current Company</Label>
                                    <Input type="text" id="currency" placeholder="" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="expectedSalary">Total Experience(Years)</Label>
                                    <Input type="number" id="expectedSalary" placeholder="" />
                                </div>
                            </div>
                            <div>
                            <div className="flex items-center gap-2">
                                <p className="flex-none flex">Current Location</p>
                                <div className="w-full h-0 border-t"></div>
                            </div>
                            <div className="my-6 flex items-center justify-between">
                                <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                    <Label htmlFor="currentSalary">Country</Label>
                                    <Select>
                                        <SelectTrigger className="w-100">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="inr">INR</SelectItem>
                                                <SelectItem value="usd">USD</SelectItem>
                                                <SelectItem value="eur">EUR</SelectItem>
                                                <SelectItem value="jyp">JYP</SelectItem>
                                                <SelectItem value="gbp">GBP</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                    <Label htmlFor="currency">State</Label>
                                    <Select>
                                        <SelectTrigger className="w-100">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="inr">INR</SelectItem>
                                                <SelectItem value="usd">USD</SelectItem>
                                                <SelectItem value="eur">EUR</SelectItem>
                                                <SelectItem value="jyp">JYP</SelectItem>
                                                <SelectItem value="gbp">GBP</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                    <Label htmlFor="expectedSalary">City</Label>
                                    <Input type="number" id="expectedSalary" placeholder="" />
                                </div>
                                <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                    <Label htmlFor="expectedSalary">Pincode</Label>
                                    <Input type="number" id="expectedSalary" placeholder="" />
                                </div>
                            </div>
                            <div className="grid w-full gap-1.5">
                                    <Label htmlFor="address">Address</Label>
                                    <Textarea id="address" />
                                </div>
                            </div>


                            <div className="my-6">
                            <div className="flex items-center gap-2">
                                <p className="flex-none flex">Prefered Location</p>
                                <div className="w-full h-0 border-t"></div>
                            </div>
                            <div className="my-6 flex items-center justify-between">
                                <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                    <Label htmlFor="currentSalary">Country</Label>
                                    <Select>
                                        <SelectTrigger className="w-100">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="inr">INR</SelectItem>
                                                <SelectItem value="usd">USD</SelectItem>
                                                <SelectItem value="eur">EUR</SelectItem>
                                                <SelectItem value="jyp">JYP</SelectItem>
                                                <SelectItem value="gbp">GBP</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                    <Label htmlFor="currency">State</Label>
                                    <Select>
                                        <SelectTrigger className="w-100">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="inr">INR</SelectItem>
                                                <SelectItem value="usd">USD</SelectItem>
                                                <SelectItem value="eur">EUR</SelectItem>
                                                <SelectItem value="jyp">JYP</SelectItem>
                                                <SelectItem value="gbp">GBP</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                    <Label htmlFor="expectedSalary">City</Label>
                                    <Input type="number" id="expectedSalary" placeholder="" />
                                </div>
                                <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                    <Label htmlFor="expectedSalary">Pincode</Label>
                                    <Input type="number" id="expectedSalary" placeholder="" />
                                </div>
                            </div>
                            <div className="grid w-full gap-1.5">
                                    <Label htmlFor="address">Address</Label>
                                    <Textarea id="address" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}