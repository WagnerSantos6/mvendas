import NotificationButton from '../NotificationButton/index';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 30));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`).then(response => {
            setSales(response.data.content);
        })
    }, []);
    return (
        <>
            <div className="vendasmeta-card">
                <h2 className="vendasmeta-sales-title">Vendas</h2>
                <div>
                    <div className="vendasmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="vendasmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="vendasmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="showsince992">ID</th>
                                <th className="showsince">Data</th>
                                <th>Vendedor</th>
                                <th className="showsince992">Visitas</th>
                                <th className="showsince992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sales.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className="showsince992">{item.id}</td>
                                        <td className="showsince">{new Date(item.date).toLocaleDateString()}</td>
                                        <td>{item.sellerName}</td>
                                        <td className="showsince992">{item.visited}</td>
                                        <td className="showsince992">{item.deals}</td>
                                        <td>{item.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="vendasmeta-red-btn-container">
                                                <NotificationButton />

                                            </div>

                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>

                    </table>
                </div>


            </div>

        </>
    )
}

export default SalesCard;