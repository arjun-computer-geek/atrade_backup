'use client'
import { Button, Card } from "flowbite-react";
import Input from "@/src/Components/common/input/Input";
import Image from "next/image";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginFormValidationSchema from "@/src/formValidation/login/loginFormValidation";
import { LoginFormTypes } from "@/src/Interfaces/login/loginForm";
import customFetch from "@/src/utils/customFetch";
import { SIGNIN } from "@/src/constants/apiEndpoints/apiEndpoints";
import { POST, WIHTOUT_AUTH } from "@/src/constants/global";
import { setEncryptedCookieClient } from "@/src/utils/cookies";
import { useRouter } from 'next/navigation'

function LoginForm() {
    const router = useRouter()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormValidationSchema),
    });

    const loginSubmitHandler: SubmitHandler<LoginFormTypes> = async (data) => {
        const res = await customFetch(SIGNIN, POST, data, WIHTOUT_AUTH)
        if (res) {
            setEncryptedCookieClient("currentUser", res);
            router.push('/dashboard')
            router.refresh()
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center w-full max-w-md">

                <Image
                    alt="Alven Logo"
                    height="96"
                    src="/images/logo.svg"
                    width="96"
                    className="mb-3"
                />
                <Card className="w-full ">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Login to Avlen
                    </h5>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(loginSubmitHandler)}>

                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input
                                {...field}
                                placeHolder="user name"
                                type="text"
                            />}

                        />

                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input
                                placeHolder="password"
                                type="password"
                                {...field}
                            />}
                        />


                        <Button type="submit">Login to your account</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default LoginForm;
