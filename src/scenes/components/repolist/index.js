import React from 'react'
import {connect} from 'react-redux'
import {getRepoStats} from '../../../services/stats/actions'

class RepoList extends React.Component {
  componentDidMount(){
    this.props.getRepoStats('brijq');
  }

  render(){
    return(
      <div className="content content-boxed">
        <div className="row font-s13">
        <div className="col-lg-12">
          <div className="block">
            <div className="block-content block-content-full text-center">
              <div className="item item-2x item-circle bg-gray-lighter">
                <i className="fa fa-battery-full">
                </i>
              </div>
            </div>
            <div className="block-content block-borderless">
              <div className="table-responsive">
                <table className="table table-striped table-vcenter">
                  <thead>
                  <tr>
                    <th className="font-s12 th-padding-size" width="200">UserName</th>
                    <th className="font-s12 th-padding-size">Contributions</th>
                    <th className="font-s12 th-padding-size">User Link</th>
                    <th className="font-s12 th-padding-size">User Type</th>
                    <th className="font-s12 th-padding-size" width=""/>
                  </tr>
                  </thead>
                  <tbody>

                    {this.props.Stats.repoStats.map((repo) => {
                      return (
                        <tr key={repo.id}>
                          <td>
                            <a href={`#`} >
                              {repo.login}
                            </a>
                          </td>
                          <td>
                            <a href={`/home`} >
                              {repo.contributions}
                            </a>
                          </td>
                          <td>
                            <a href={`/`} >
                              {repo.html_url}
                            </a>
                          </td>
                          <td>
                            <a href={`/`} >
                              {repo.type}
                            </a>
                          </td>
                        </tr>
                     )
                  })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    Stats: state.Stats,
  };
}

export default connect(mapStateToProps, {
  getRepoStats,
})(RepoList);