import React, { useEffect, useState } from 'react'
import { getMasterData, getSegmentData } from '../../utils/addUser/getMasterData';
import Select from 'react-select';
const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        boxShadow: 'none', // Remove focus color
    }),
};
export const StepThreeForm = (props: { setStepThreeFormData: any, stepThreeError: any, stepThreeFormData: any }) => {
    const { setStepThreeFormData, stepThreeError, stepThreeFormData } = props;
    const [segmentData, setSegmentData] = useState<any>([])
    const [masterData, setMasterData] = useState<any>({})
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('registeredUser') || 'null')
        setStepThreeFormData((prev: any) => ({ ...prev, userId: data?.id }))
        getSegmentData().then(setSegmentData)
        getMasterData().then(setMasterData)
    }, [])

    const onChangeHandler = (e: any) => {
        setStepThreeFormData((prev: any) => {
            const updatedFormData = { ...prev }
            if (e.target.value === '') {
                delete updatedFormData[e.target.name];
            } else if (e.target.type === 'checkbox') {
                updatedFormData[e.target.name] = e.target.checked
            } else {
                updatedFormData[e.target.name] = e.target.value
            }
            return updatedFormData;
        })
    }
    return (
        <div className='grid gap-4 mb-4 sm:grid-cols-2'>
            {/* input fields */}
            <div>
                <label
                    htmlFor="userId"
                    className={`block mb-2 text-sm ${stepThreeError?.userId_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}
                >USER ID
                </label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="userId"
                    id="userId"
                    value={stepThreeFormData?.userId || 0}
                    className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 ${stepThreeError?.userId_error ? 'border-red-700 focus:ring-red-700 focus:border-red-600  dark:border-red-700 dark:placeholder-red-700 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}`} placeholder="User Id"
                    required={true} disabled={true}
                />
                {stepThreeError?.userId_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.userId_error}</span>}
            </div>
            <div>
                <label htmlFor="brokerageType" className={`block mb-2 text-sm ${stepThreeError?.brokerageType_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}>BROKERAGE TYPE</label>
                <Select
                    name='brokerageType'
                    id='brokerageType'
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full dark:placeholder-gray-400 dark:text-white dark:bg-gray-700  ${stepThreeError?.brokerageType_error ? "border-red-700 dark:border-red-700 focus:border-red-700 dark:focus:ring-red-700 dark:focus:border-red-700 focus:ring-red-700" : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600"}`}
                    options={masterData?.brokerageType && Object.entries(masterData?.brokerageType)?.map(([id, value]: any) => ({ label: value, value: id }))}
                    onChange={(val: any) => setStepThreeFormData((prev: any) => ({ ...prev, brokerageType: val?.label?.toUpperCase()?.replaceAll(" ", "_") }))}
                    placeholder='Select Agent'
                    styles={customStyles}
                />
                {stepThreeError?.brokerageType_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.brokerageType_error}</span>}
            </div>
            <div>
                <label htmlFor="brokerageUserType" className={`block mb-2 text-sm ${stepThreeError?.brokerageUserType_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}>BROKERAGE USER TYPE</label>
                <Select
                    name='brokerageUserType'
                    id='brokerageUserType'
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full dark:placeholder-gray-400 dark:text-white dark:bg-gray-700  ${stepThreeError?.brokerageUserType_error ? "border-red-700 dark:border-red-700 focus:border-red-700 dark:focus:ring-red-700 dark:focus:border-red-700 focus:ring-red-700" : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600"}`}
                    options={masterData?.brokerageUserType && Object.entries(masterData?.brokerageUserType)?.map(([id, value]: any) => ({ label: value, value: id }))}
                    onChange={(val: any) => setStepThreeFormData((prev: any) => ({ ...prev, brokerageUserType: val?.label?.toUpperCase()?.replaceAll(" ", "_") }))}
                    placeholder='Select Agent'
                    styles={customStyles}
                />
                {stepThreeError?.brokerageUserType_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.brokerageUserType_error}</span>}
            </div>

            <div>
                <label htmlFor="segmentId" className={`block mb-2 text-sm ${stepThreeError?.segmentId_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}>AGENT</label>
                <Select
                    name='segmentId'
                    id='segmentId'
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full dark:placeholder-gray-400 dark:text-white dark:bg-gray-700  ${stepThreeError?.segmentId_error ? "border-red-700 dark:border-red-700 focus:border-red-700 dark:focus:ring-red-700 dark:focus:border-red-700 focus:ring-red-700" : "border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600"}`}
                    options={segmentData?.map((data: any) => ({ label: data?.name, value: data?.id }))}
                    onChange={(val: any) => setStepThreeFormData((prev: any) => ({ ...prev, segmentId: val?.value }))}
                    placeholder='Select Agent'
                    styles={customStyles}
                />
                {stepThreeError?.segmentId_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.segmentId_error}</span>}
            </div>
            <div>
                <label
                    htmlFor="deliveryPercentage"
                    className={`block mb-2 text-sm ${stepThreeError?.deliveryPercentage_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}
                >
                    DELIVERY PERCENTAGE
                </label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="deliveryPercentage"
                    id="deliveryPercentage"
                    className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 ${stepThreeError?.deliveryPercentage_error ? 'border-red-700 focus:ring-red-700 focus:border-red-600  dark:border-red-700 dark:placeholder-red-700 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}`} placeholder="In Percentage(%)"
                    required={true}
                />
                {stepThreeError?.deliveryPercentage_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.deliveryPercentage_error}</span>}
            </div>
            <div>
                <label
                    htmlFor="minimumRate"
                    className={`block mb-2 text-sm ${stepThreeError?.minimumRate_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}
                >
                    MINIMUM RATE
                </label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="minimumRate"
                    id="minimumRate"
                    className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 ${stepThreeError?.minimumRate_error ? 'border-red-700 focus:ring-red-700 focus:border-red-600  dark:border-red-700 dark:placeholder-red-700 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}`} placeholder="Minimum Rate"
                    required={true}
                />
                {stepThreeError?.minimumRate_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.minimumRate_error}</span>}
            </div>
            <div>
                <label
                    htmlFor="intraDayPercentage"
                    className={`block mb-2 text-sm ${stepThreeError?.intraDayPercentage_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}
                >
                    INTRA DAY PERCENTAGE
                </label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="intraDayPercentage"
                    id="intraDayPercentage"
                    className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 ${stepThreeError?.intraDayPercentage_error ? 'border-red-700 focus:ring-red-700 focus:border-red-600  dark:border-red-700 dark:placeholder-red-700 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}`} placeholder="Intra Day Percentage"
                    required={true}
                />
                {stepThreeError?.intraDayPercentage_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.intraDayPercentage_error}</span>}
            </div>
            <div>
                <label
                    htmlFor="minimumPercentage"
                    className={`block mb-2 text-sm ${stepThreeError?.minimumPercentage_error ? "text-red-700" : "font-medium text-gray-900 dark:text-white"} `}
                >
                    MINIMUM PERCENTAGE
                </label>
                <input
                    onChange={onChangeHandler}
                    type="text"
                    name="minimumPercentage"
                    id="minimumPercentage"
                    className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 text-gray-900 ${stepThreeError?.minimumPercentage_error ? 'border-red-700 focus:ring-red-700 focus:border-red-600  dark:border-red-700 dark:placeholder-red-700 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700' : 'border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}`} placeholder="Minimum Percentage"
                    required={true}
                />
                {stepThreeError?.minimumPercentage_error && <span className="inline-flex text-sm text-red-700">{stepThreeError?.minimumPercentage_error}</span>}
            </div>
            <div>
                <div className="flex items-center ">
                    <label htmlFor="script-wise" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Script Wise</label>
                    <input onChange={onChangeHandler} name='scriptWise' id="script-wise" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
                <div className="flex items-center ">
                    <label htmlFor="higher-side-only" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Higher Side Only</label>
                    <input onChange={onChangeHandler} name='higherSideOnly' id="higher-side-only" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
            </div>
            <div>
                <div className="flex items-center ">
                    <label htmlFor="brokerage-type" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Brokerage Type</label>
                    <input
                        // onChange={onChangeHandler} 
                        name='brokerageType' id="brokerage-type" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
                <div className="flex items-center ">
                    <label htmlFor="minimum-percentage-on-del" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Minimum Percentage On Del</label>
                    <input onChange={onChangeHandler} name='minimumPercentageOnDel' id="minimum-percentage-on-del" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
            </div>
        </div>
    )
}
