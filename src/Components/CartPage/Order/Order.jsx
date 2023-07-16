import { ErrorMessage, Field, Form, Formik } from "formik";
import { Container } from "../../Layout/Container/Container"
import style from './Order.module.scss';
import { PatternFormat } from "react-number-format";

export const Order = ({ cartItems }) => {
    const handleSubmitOrder = (values) => {
        console.log({ cartItems, values })
    }

    const validationSchema = () => {

    }

    return (
        <section>
            <Container>
                <h2 className={style.title}>Оформление заказа</h2>

                <Formik
                    initialValues={{
                        fio: 'Vera',
                        address: '',
                        phone: '',
                        email: '',
                        delivery: 'self',
                    }}
                    onSubmit={handleSubmitOrder}
                    validationSchema={validationSchema}
                >
                    <Form className={style.form}>
                        <fieldset className={style.personal}>
                            <label className={style.label}>
                                <Field
                                    className={style.input}
                                    type='text'
                                    placeholder='ФИО*'
                                    name='fio'
                                />
                                <ErrorMessage
                                    className={style.error}
                                    name='fio'
                                    component={'span'}
                                />
                            </label>

                            <label className={style.label}>
                                <Field
                                    className={style.input}
                                    type='text'
                                    placeholder='Адрес доставки'
                                    name='address'
                                />
                                <ErrorMessage
                                    className={style.error}
                                    name='address'
                                    component={'span'}
                                />
                            </label>

                            <label className={style.label}>
                                <Field
                                    as={PatternFormat}
                                    className={style.input}
                                    format='+7(###)-###-####'
                                    mask='_'
                                    placeholder='Телефон*'
                                    name='phone'
                                />
                                <ErrorMessage
                                    className={style.error}
                                    name='phone'
                                    component={'span'}
                                />
                            </label>


                            <label className={style.label}>
                                <Field
                                    className={style.input}
                                    type='email'
                                    placeholder='Email*'
                                    name='email'
                                />
                                <ErrorMessage
                                    className={style.error}
                                    name='email'
                                    component={'span'}
                                />
                            </label>
                        </fieldset>

                        <fieldset className={style.radioList}>
                            <label className={style.radio}>
                                <Field
                                    className={style.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='delivery'
                                />
                                <span>Доставка</span>
                            </label>
                            <label className={style.radio}>
                                <Field
                                    className={style.radioInput}
                                    type='radio'
                                    name='delivery'
                                    value='self'
                                />
                                <span>Самовывоз</span>
                            </label>
                            <ErrorMessage
                                className={style.error}
                                name='delivery'
                                component={'span'}
                            />
                        </fieldset>

                        <button className={style.submit} type="submit">Оформить</button>
                    </Form>
                </Formik>
            </Container>
        </section>
    )
}