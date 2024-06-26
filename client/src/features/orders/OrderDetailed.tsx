import { Typography, Grid, Button, Box } from "@mui/material";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";
import { Order } from "../../app/models/order";
import { BasketItem } from "../../app/models/basket";

interface Props {
    order: Order;
    setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography sx={{ p: 2}} variant="h4" gutterBottom>
                    Order# {order.id} - {order.orderStatus}
                </Typography>
                <Button onClick={() => setSelectedOrder(0)} sx={{ m: 2 }} size='large' variant='contained'>BACK TO ORDERS</Button>
            </Box>
            <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6} />
                <BasketSummary subtotal={order.subtotal}/>
            </Grid>
        </>
    )
}