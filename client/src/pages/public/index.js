import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';
import './style.css';
import banner from '../../../images/banner.jpg';


const Homepage = () => {
  return (
    <Container className="mainpage-container">
      <Segment vertical className="mainpage-segment">
        <Image fluid style={{ backgroundImage: `url(${banner})`, height: '100vh' }}>
          <Grid container stackable verticalAlign='middle' >
            <Grid.Row className="gridrow">
              <Grid.Column floated='left' width={6}>
                <Image bordered rounded size='large' />
              </Grid.Column>
              <Grid.Column width={8} floated='right'>
                <Header as='h1' style={{ fontSize: '3em' }}>
                  GeoCRM
                </Header>
                <p >
                  — это комбинация мощной системы управления взаимоотношениями с клиентами и продвинутой геолокационной платформы.
                  Она помогает разработать усиленную и эффективную стратегию коммерческого отслеживания с возможностью записи всей информации о текущих и потенциальных клиентах с использованием Smart Visual Data.              </p>
                <Header as='h1' style={{ fontSize: '3em' }}>
                  Smart Visual Data
                </Header>
                <p>
                  Основана на визуализации данных с помощью полностью настраиваемых информационных панелей, адаптированных к потребностям каждого клиента;
                  Информационные панели на основе интеллектуальных данных представляют собой предварительно определенные загружаемые шаблоны.
                </p>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Image>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Впервые здесь?
              </Header>
              <Link to='/sign-up'>
                <p style={{ fontSize: '1.33em' }}>
                  Зарегистрироваться в системе
                </p>
              </Link>            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Создайте свою аналитическую карту
              </Header>
              <Link to='/sign-in'>
                <p style={{ fontSize: '1.33em' }}>
                  Войти в учетную запись
                </p>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the
            art of doing nothing by providing massive amounts of whitespace and generic content that
            can seem massive, monolithic and worth your attention.
          </p>
          <Button as='a' size='large'>
            Read More
          </Button>

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>

          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>

      <Segment inverted vertical style={{ padding: '5em 5em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  <p><b>Факультет прикладной космонавтики и фотограмметрии</b></p>
                  <p>Геоинформационные системы и технологии</p>
                </Header>
                <p>Чуханов Николай Дмитриевич  <hr></hr> Артемьев Матвей Сергеевич</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Container>
  );
};

export default Homepage;
