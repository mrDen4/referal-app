import React, { Component } from 'react';
import styles from './userArea.module.scss';

class UserArea extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Личный кабинет пользователя</h1>
                <h2>Иванов Иван Иваныч</h2>
                <div className={styles.content}>
                    <div className={styles.history}>
                        <h3>История операций:</h3>
                        <div className={styles.table}>
                            <div className={styles.row}>
                                <div className={styles.colDate}>Дата</div>
                                <div className={styles.colInfo}>Инфо по операции</div>
                                <div className={styles.colSumm}>Сумма</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>21.03.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Ивана</div>
                                <div className={styles.colSumm}>10 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colDate}>28.06.2021</div>
                                <div className={styles.colInfo}>Зачисление средств за Васю</div>
                                <div className={styles.colSumm}>2 000 руб.</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.balance}>
                            <h3>Баланс</h3>
                            <p>1 000 000 руб.</p>
                            <button className={styles.button}>Вывести</button>
                        </div>
                        <div className={styles.balance}>
                            <h3>Ваш промокод</h3>
                            <p>010121</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserArea;