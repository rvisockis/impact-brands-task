import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';

function Product(props) {
    return (
        <div className='product'>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className='product-image'
                        image={props.image}
                        height='140'
                        title={props.title}
                    />
                </CardActionArea>
            </Card>
            <Typography className='product-title' variant='subtitle1' gutterBottom>{props.title}</Typography>
        </div>
    );
}

export default Product;