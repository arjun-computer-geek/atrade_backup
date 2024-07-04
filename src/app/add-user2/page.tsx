"use client";
import React, { FC, useEffect, useState } from 'react'
import { StepTwoForm } from '../../Components/form/StepTwoForm'
// import { NavSidebar } from '../../Components/layout/Navbar'
import { Button } from 'flowbite-react'
import { useRouter } from 'next/router';

const initialValue = {
    openingBalanceType: "DEBIT",
    orderBetweenHighLow: false,
    intraDayAutoSquare: false,
    applyAutoSquare: false,
    onlyPostingSquareOff: false
}
export const StepTwo: FC = () => {
    const [stepTwoFormData, setStepTwoFormData] = useState<any>(initialValue)
    const [stepTwoError, setStepTwoError] = useState<any>({})
    // const router = useRouter();

    const stepTwoSubmitHandler = async (e: any, data: any) => {
        e.preventDefault();
        // const isValid = await validateStepTwo(data)
        // if (isValid === true) {
        //     setStepTwoError({})
        //     dispatch(addUserStepTwo(data))
        //     navigate('/add-user/3')
        // } else {
        //     setStepTwoError(isValid)
        // }
    }
    return (
        // <NavSidebar isFooter={false}>
            <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-0 sticky top-0 top-[84px] px-10 py-5 min-h-screen">

                <div className='flex items-center w-full mb-4 sm:mb-5 space-x-4'>
                    <Button color="gray" >
                        <div className="flex items-center gap-x-3">
                            <span>Previous</span>
                        </div>
                    </Button>

                    <ol className="flex items-center w-full">
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 dark:text-white">
                                <span>1</span>
                            </div>
                        </li>
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0 dark:text-white">
                                <span>2</span>
                            </div>

                        </li>
                        <li className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 dark:text-white">
                                <span>3</span>
                            </div>
                        </li>
                    </ol>
                    <Button type='submit' color="primary" onClick={(e: any) => stepTwoSubmitHandler(e, stepTwoFormData)}>
                        <div className="flex items-center gap-x-3">
                            Next
                        </div>
                    </Button>
                </div>
                <StepTwoForm
                    setStepTwoFormData={setStepTwoFormData}
                    stepTwoError={stepTwoError}
                />
            </main>
        // </NavSidebar>
    )
}

export default StepTwo;
