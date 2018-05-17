import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_articles } from '../actions';

class Home extends Component{
  componentWillMount(){
    this.props.fetch_articles();
    console.log('CWM ',this.props);
  }

  componentDidMount(){
    console.log('CDM',this.props);
  }

  render(){
    return(
      <div>
        <h2>HMR Installed Succesfully</h2>
        <ul>
          {
            this.props.articles && this.props.articles.length > 2 ?
              this.props.articles.map(article => {
                return(
                  <div>{article.name}</div>
                )
              })
            :''
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => ({
    fetch_articles: () => dispatch(fetch_articles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
