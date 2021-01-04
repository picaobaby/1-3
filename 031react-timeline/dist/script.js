const timelineData = [
{
  text: 'Started working on the app-ideas repository',
  date: 'February 25 2019',
  category: {
    tag: 'app-ideas',
    color: '#FFDB14' },

  link: {
    url: 'https://github.com/florinpop17/app-ideas',
    text: 'Check it out on GitHub' } },


{
  text: 'Started the Weekly Coding Challenge program',
  date: 'March 04 2019',
  category: {
    tag: 'blog',
    color: '#e17b77' },

  link: {
    url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
    text: 'Check it out here' } },


{
  text: 'Got 1.000 followers on Twitter',
  date: 'March 07 2019',
  category: {
    tag: 'twitter',
    color: '#1DA1F2' },

  link: {
    url: 'https://twitter.com/florinpop1705',
    text: 'See profile' } },


{
  text:
  'I published my first article in the FreeCodeCamp Medium Publication',
  date: 'March 18 2019',
  category: {
    tag: 'medium',
    color: '#018f69' },

  link: {
    url:
    'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
    text: 'Check it out here' } },


{
  text: 'Over 12.000 views in a single day on my Medium posts',
  date: 'April 05 2019',
  category: {
    tag: 'medium',
    color: '#018f69' },

  link: {
    url: 'https://medium.com/@popflorin1705',
    text: 'See profile' } }];




const TimelineItem = ({ data }) => /*#__PURE__*/
React.createElement("div", { className: "timeline-item" }, /*#__PURE__*/
React.createElement("div", { className: "timeline-item-content" }, /*#__PURE__*/
React.createElement("span", { className: "tag", style: { background: data.category.color } },
data.category.tag), /*#__PURE__*/

React.createElement("time", null, data.date), /*#__PURE__*/
React.createElement("p", null, data.text),
data.link && /*#__PURE__*/
React.createElement("a", {
  href: data.link.url,
  target: "_blank",
  rel: "noopener noreferrer" },

data.link.text), /*#__PURE__*/


React.createElement("span", { className: "circle" })));




const Timeline = () =>
timelineData.length > 0 && /*#__PURE__*/
React.createElement("div", { className: "timeline-container" },
timelineData.map((data, idx) => /*#__PURE__*/
React.createElement(TimelineItem, { data: data, key: idx })));




const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/
React.createElement("h1", null, "React Timeline"), /*#__PURE__*/
React.createElement(Timeline, null));


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));