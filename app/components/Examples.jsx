var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => (
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Rochester, MN'>Rochester, MN</Link>
      </li>
      <li>
        <Link to='/?location=Green Bay, WI'>Green Bay, WI</Link>
      </li>
      <li>
        <Link to='/?location=El Paso, TX'>El Paso, TX</Link>
      </li>
    </ol>
  </div>
);

module.exports = Examples;
