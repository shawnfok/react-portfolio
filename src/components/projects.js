import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import BurgerImg from "../components/assets/Burger.png";
import EatWhere from "../components/assets/eatwhere.png";
import GETogether from "../components/assets/Getogether.png";
import Notetaker from "../components/assets/NoteTaker.png";
import Scheduler from "../components/assets/scheduler2.png";
import WeatherApp from "../components/assets/weather.png";

export default class projects extends Component {
  render() {
    return (
      <div>
        {/* CARD-DECK-1 */}
        <CardDeck>
          {/* CARD 1 */}
          <Card>
            <Card.Img variant="top" src={BurgerImg} />
            <Card.Body>
              <Card.Title><h4>Eat-Da-Burger</h4></Card.Title>
              <Card.Text>
                This is a burger logger app with MySQL, Node, Express, Handlebars and a homemade ORM.
              </Card.Text>
              <Button variant="primary" href="https://secure-mountain-20793.herokuapp.com/" role="button">Webpage</Button>{' '}
                <Button variant="secondary" href="https://github.com/shawnfok/burger-logger" role="button">Code</Button>{' '}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on Nov 30, 2020</small>
            </Card.Footer>
          </Card>
          {/* CARD 2 */}
          <Card>
            <Card.Img variant="top" src={EatWhere} />
            <Card.Body>
              <Card.Title><h4>EatWhere</h4></Card.Title>
              <Card.Text>
              Using Zomato API, EatWhere allows users to locate, select, and enjoy restaurants and bars around them.
              </Card.Text>
              <Button variant="primary" href="https://shawnfok.github.io/EatWhere/" role="button">Webpage</Button>{' '}
                <Button variant="secondary" href="https://github.com/shawnfok/EatWhere" role="button">Code</Button>{' '}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on Oct 1, 2020</small>
            </Card.Footer>
          </Card>
          {/* CARD 3 */}
          <Card>
            <Card.Img variant="top" src={GETogether} />
            <Card.Body>
              <Card.Title><h4>GETogether</h4></Card.Title>
              <Card.Text>
              GETogether is a global platform that allows anyone to
                create, find and attend events that fuel their passions and enrich their lives. Its mission is to bring
                the world together through shared experiences.
              </Card.Text>
              <Button variant="primary" href="https://project2gw.herokuapp.com/" role="button">Webpage</Button>{' '}
                <Button variant="secondary" href="https://github.com/shawnfok/GETogether" role="button">Code</Button>{' '}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on Nov 30, 2020</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        {/* CARD-DECK-2 */}
        <CardDeck>
          {/* CARD 4 */}
          <Card>
            <Card.Img variant="top" src={Notetaker} />
            <Card.Body>
              <Card.Title><h4>Note Taker</h4></Card.Title>
              <Card.Text>
              The Note Taker app can be used to write, save, and delete notes. It uses an express backend and save and retrieve note data from a JSON file.
              </Card.Text>
              <Button variant="primary" href="https://blooming-castle-82289.herokuapp.com/" role="button">Webpage</Button>{' '}
                <Button variant="secondary" href="https://github.com/shawnfok/note-taker" role="button">Code</Button>{' '}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on Oct 28, 2020</small>
            </Card.Footer>
          </Card>
          {/* CARD 5 */}
          <Card>
            <Card.Img variant="top" src={Scheduler} />
            <Card.Body>
              <Card.Title><h4>Work Day Scheduler</h4></Card.Title>
              <Card.Text>
              With Moment.js library, this calendar application allows user to dynamically save events for each hour of the day.
              </Card.Text>
              <Button variant="primary" href="https://shawnfok.github.io/work-day-scheduler//" role="button">Webpage</Button>{' '}
                <Button variant="secondary" href="https://github.com/shawnfok/work-day-scheduler" role="button">Code</Button>{' '}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on Sep 17, 2020</small>
            </Card.Footer>
          </Card>
          {/* CARD 6 */}
          <Card>
            <Card.Img variant="top" src={WeatherApp} />
            <Card.Body>
              <Card.Title><h4>Weather Dashboard</h4></Card.Title>
              <Card.Text>
              By using OpenWeather API, this weather dashboard retrieves weather data for cities that you search.
              </Card.Text>
              <Button variant="primary" href="https://shawnfok.github.io/weather-dashboard/" role="button">Webpage</Button>{' '}
                <Button variant="secondary" href="https://github.com/shawnfok/weather-dashboard" role="button">Code</Button>{' '}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated on Sep 23, 2020</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
