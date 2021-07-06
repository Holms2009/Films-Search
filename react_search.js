'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        return <button className="like_button">Liked</button>;
    }

    return <button onClick={() => this.setState({ liked: true })} className="like_button">Like</button>;
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton/>, domContainer);