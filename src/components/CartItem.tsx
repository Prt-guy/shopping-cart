import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import storeItems from '../data/items.json';
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center p-3 border rounded mb-2 shadow-sm">
            <img
                src={item.imgUrl}
                alt={item.name}
                style={{
                    width: '125px',
                    height: '75px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                }}
            />
            <div className="me-auto">
                <div className="fw-bold">
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: '.95rem' }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: '1rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div className="fw-bold" style={{ minWidth: '80px', textAlign: 'right' }}>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="d-flex align-items-center justify-content-center"
                style={{ borderRadius: '50%', width: '30px', height: '30px' }}
            >
                &times;
            </Button>
        </Stack>
    );
}
