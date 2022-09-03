// important for search engine to understand our site, to direct trafic
// not likely that the data will change multiple time per second (no logic to load at client side)
// do not need server side rendering
// getStaticProps make most sense, update every few min

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

// filter the database : google for "firebase realtime database filter"

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

export default HomePage;
