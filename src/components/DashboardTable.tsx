import items from '../data/items.json';
import { Table } from 'react-bootstrap';

type DashboardTableProps = {
    name: string;
    price: number;
}

export default function DashboardTable() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item: DashboardTableProps, i: number) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
