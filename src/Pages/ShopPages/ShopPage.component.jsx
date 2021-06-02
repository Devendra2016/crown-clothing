import React from  'react';
import SHOP_DATA from './ShopPage.data';
import CollectionPreview from '../../Component/CollectionPreview/CollectionPreview.component';

class ShopPages extends React.Component
{
    constructor()
    {
        super();
        this.state={
            collections:SHOP_DATA
        }
    }
    render()
    {
        const {collections}= this.state;
        return(
            <div className='shop-pages'>
                {
                collections.map(({ id , ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
                }
            </div>
        )
    }
}
export default ShopPages;