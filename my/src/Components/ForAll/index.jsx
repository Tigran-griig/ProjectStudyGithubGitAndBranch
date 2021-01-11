import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Card} from '../'




export default function SkeletonChildren({
                                          item,
                                             avatar,
                                             handleRemoveProduct,

                                         }) {
    return (
            <Grid item xs>
                <Card
                    avatar={avatar}
                    fullName={item.user.fullname}
                text={item.text}
                aboutProducts={item.aboutProducts}
                phone={item.phone}
                price={item.price}
                url={item.attachments[0].url}
                    createdAt={item.createdAt}
                    id={item._id}
                    handleRemoveProduct={()=>handleRemoveProduct(item._id)}
            />
            </Grid>

    );
}