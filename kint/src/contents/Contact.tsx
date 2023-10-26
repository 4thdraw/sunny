import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string;
    phone: string;
    field: string;
    agree: boolean;
}

const Contact:React.FC = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
    return (
        <section id='contact'>
            <div className='title'>
                <h3>구매 및 제품 상담 예약</h3>
                <p>문의사항을 남겨주시면 빠르게 연락드리겠습니다.</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='formBox'>
                        <p className='explain'>성함과 연락처를 남겨주세요.</p>
                        <div className='d-lg-flex justify-content-center'>
                            <div className='withError' >
                                <div className='textbox d-flex'>
                                    <label htmlFor='name'>성함</label>
                                    <input id='name' {...register("name", { required: true })} />
                                </div>
                                {errors.name && <span>성함을 적어주세요.</span>}
                            </div>
                            <div className='withError' >
                                <div className='textbox d-flex'>
                                    <label htmlFor='phone'>연락처</label>
                                    <input id='phone' {...register("phone", { required: true })} placeholder="-제외 숫자만 입력해주세요." />
                                </div>
                                {errors.phone && <span>전화번호를 적어주세요.</span>}
                            </div>
                        </div>
                    </div>
                    <div className='formBox pt-5'>
                        <p className='explain'>문의사항을 남겨주세요.</p>
                        <textarea {...register("field", { required: true })}></textarea>
                        {errors.field && <span>문의사항을 적어주세요.</span>}
                    </div>
                    <div className='d-flex agree align-items-center py-3'>
                        <input type="checkbox" id="agree" {...register("agree", { required: true })}/>
                        <label htmlFor='agree'><em>개인정보 수집 및 이용</em>에 동의합니다.</label>
                    </div>
                        {errors.agree && <span>개인정보 수집 및 이용에 동의해주세요.</span>}
                    <div className='d-flex justify-content-center py-5'>
                        <input className='submit' type="submit" value="보내기" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
