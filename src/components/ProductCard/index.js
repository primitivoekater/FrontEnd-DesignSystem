import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CustomCard } from './style'

export default function ProductCard() {
    return (
        <CustomCard>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHtphZpK06hBu1LO_VECbyvHihRl6lBUc_FHY0XyTuWPxf50zmPDctGCnyFruj1PKI1s&usqp=CAU"
                    alt="pea"
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="div"
                        color="#575757"
                    >
                        Plant
                    </Typography>
                    <Typography variant="body2" color="#2222">
                        * pew pew pew pew *
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography
                        variant="subtitle2"
                        color="#656565"
                    >
                        price : 4 suns
                    </Typography>

                </CardContent>
            </CardActionArea>
        </CustomCard>
    );
}
