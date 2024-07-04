'use client'
import React, { Dispatch, useEffect, useState } from 'react'
import { ConfirmationModal } from '../modal/ConfirmModal'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginFormValidationSchema from '@/src/formValidation/login/loginFormValidation';
import Input from '../common/input/Input';
import { Label } from 'flowbite-react';
import stepFormValidationSchema from '@/src/formValidation/stepform/stepFormValidation';

export const StepOneForm = function () {
    // const { setStepOneFormData, stepOneError } = props
    const [showModal, setShowModal] = useState<boolean>(false);
    const [registeredUser, setRegisteredUser] = useState<any>({})


    const checkUserName = async (username: string) => {
        const { accessToken } = JSON.parse(localStorage.getItem("currentUser") || "null")
        const port = process.env.VITE_API_URL;
        try {
            const res: any = await fetch(`${port}/api/v1/users/${username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },

            })
            const data = await res.json();
            if (res.status === 200 && data?.userName) {
                setShowModal(true);
                setRegisteredUser(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(stepFormValidationSchema)
    });

    const onChangeHandler = (e: any) => {
        if (e.target.name === 'username' && e.target.value?.length >= 2) {
            checkUserName(e.target.value)
        }

        // setStepOneFormData((prev: any) => {
        //     const updatedFormData = { ...prev }
        //     if (e.target.value === '') {
        //         delete updatedFormData[e.target.name];
        //     } else {
        //         updatedFormData[e.target.name] = e.target.value
        //     }
        //     return updatedFormData;
        // })
    }


    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Invoice details</h3>

            <form id="stepOneForm" onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mb-4 sm:grid-cols-2">
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Username"
                            placeHolder="Enter your username"
                            type="text"
                            error={errors.username?.message}
                        />
                    )}
                />
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="First Name"
                            placeHolder="Enter your first name"
                            type="text"
                            error={errors.firstName?.message}
                        />
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Last Name"
                            placeHolder="Enter your last name"
                            type="text"
                            error={errors.lastName?.message}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Email"
                            placeHolder="Enter your email"
                            type="email"
                            error={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Password"
                            placeHolder="Enter your password"
                            type="password"
                            error={errors.password?.message}
                        />
                    )}
                />
                <Controller
                    name="mobileNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Mobile No"
                            placeHolder="Enter your mobile number"
                            type="text"
                            // maxLength={10}
                            error={errors.mobileNo?.message}
                        />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Address"
                            placeHolder="Enter your address"
                            type="text"
                            error={errors.address?.message}
                        />
                    )}
                />
                <Controller
                    name="remark"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            {...field}
                            label="Remarks"
                            placeHolder="Enter your remarks"
                            type="text"
                            error={errors.remark?.message}
                        />
                    )}
                />
            </form>

        </>
    )
}
