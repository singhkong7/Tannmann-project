import React,{Component} from 'react';
import "./CardList.scss";
import Card from "./Card/Card";
class CardList extends Component
{
  render()
  {
    const {collections}=this.props;
    return (
            <div className="Card-list">       
                {  
                    collections.map(({id, ...otherCollectionProps})=>
                    (
                    <Card key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
    );
  }
}
export default CardList;