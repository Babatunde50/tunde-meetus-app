import React from "react";
import { connect } from "react-redux";

import "./MeetupItem.styles.css";
import Button from '../UI/Button/Button.component';
import Badge from '../UI/Badge/Badge.component'
import { updateFavourite } from "../../redux/meetup/meetup.actions";

function MeetupItem({
  address,
  description,
  imageUrl,
  subtitle,
  title,
  id,
  openEdit,
  isFavorite,
  toggleFav
}) {
  return (
    <article className="meetup-item">
      <header>
        <h1>{title}</h1>
        {
          isFavorite && <Badge> FAVOURITE </Badge>
        }
        <h2>{subtitle}</h2>
        <p>{address}</p>
      </header>
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
      <footer className="footer">
      <Button mode="outline" type="button"  click={ () => openEdit(id) }> Edit </Button>
      <Button mode="outline" click={() => toggleFav(id, isFavorite ) } type="button"> { isFavorite ? 'Unfavorite' : 'Favorite'  } </Button>
      <Button href={`/${id}`}> Show Details </Button>
      </footer>
    </article>
  );
}


const mapDispatchToProps = dispatch => ({
  toggleFav: (id, isFav) => dispatch(updateFavourite(id, isFav))
});

export default connect(null, mapDispatchToProps)(MeetupItem)