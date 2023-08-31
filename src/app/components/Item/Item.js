import { Button, Divider } from '@mui/material';
import './item.css'
export default function Item({item}) {
    const{
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link
    } = item;
    return(
        <>
            <div className='wrap'>
                <div className='img_item'>
                    <img src={image_link} alt={name} width={300} height={300}/>
                </div>
                <div className='info_item'>
                    <strong className='tit_item'>{name}</strong>
                    <strong className='num_price'>${price}</strong>
                    <span className='txt_info'>
                        {category?`${category}/`:""} {product_type}
                    </span>
                    <Button style={{marginRight:"20px;"}} variant='contained' color='success'>구매하기</Button>
                    <Button variant='contained' color='error'>취소하기</Button>
                </div>
                
                <div className='disWrap'>
                    {/* <Divider style={{margin:"20px"}}/> */}
                    <hr />
                    <h2 style={{margin:"20px"}}>Description</h2>
                    <div style={{paddingBottom:"20px", fontSize:"18px"}}>{description}</div>
                </div>
            </div>
        </>
    );
}