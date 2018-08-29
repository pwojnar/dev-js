<html>
  <body>
    <div id="root1"></div>
    <div id="root2"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script type="application/javascript">
      ReactDOM.render(
        React.createElement('h1', null, 'Hello, world!'),
        document.getElementById('root1'));
    </script>
    <script type="application/javascript">
      ReactDOM.render(
        React.createElement('h1', null, 'Bye, world!'),
        document.getElementById('root2'));
    </script>
  </body>
</html>
