import React from "react";

import "./MeetupItem.styles.css";
import Button from '../UI/Button/Button.component'

export default function MeetupItem({
  address,
  description,
  imageUrl,
  subtitle,
  title,
  id,
  openEdit,
}) {
  return (
    <article className="meetup-item">
      <header>
        <h1>{title}</h1>
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
      <Button mode="outline" type="button"> Favorite </Button>
      <Button href={`/${id}`}> Show Details </Button>
      </footer>
    </article>
  );
}
