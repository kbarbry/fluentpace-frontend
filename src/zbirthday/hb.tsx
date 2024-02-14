import React, { useState } from 'react'
import './hb.css'
import { Button, Card, Space, Typography } from 'antd'
import { useAppDispatch } from '../store/hooks'
import { setUserInfos } from '../store/slices/user.slice'
import { useLocation } from 'wouter'

const { Title } = Typography

const Hb: React.FC = () => {
  const [sizeButton, setSizeButton] = useState(1)
  const dispatch = useAppDispatch()
  const [, setLocation] = useLocation()

  const handleLogout = () => {
    dispatch(setUserInfos(null))
    setLocation('/', { replace: true })
  }

  const onClickNo = () => {
    console.log(sizeButton)
    setSizeButton(sizeButton + 1)
  }

  return (
    <div className='page-container'>
      <div className='background-gift'></div>
      <Space className='text-container'>
        <Card className='card-gift'>
          <Title level={3} style={{ margin: '0px', marginBottom: '48px' }}>
            Welcome my favorite human in this biosphere
          </Title>
          <p style={{ zIndex: '100' }}>
            Okay I agree, that's weird, you are on a website to receive a love
            message but act as if it was normal ssshhhh
          </p>
          <p>
            I wanted to make something a tiny bit special for your birthday,
            even if I know it really isn't a lot... Instead of simply send you
            the message I prepared for it, why not placing it in a nice looking
            website ?
          </p>
          <p>
            That's probably gonna be a little repetitive, cause I always say
            what I have in mind when talking to you, but I want to just tell you
            everything I have in mind when thinking about you, us, our life, our
            future life, everything we are planning on to do and probably a ton
            of others things I have in mind right now. Basically everything that
            make that I love you so much today and the nexts days and maybe help
            you realize how important and central you are to my life.
          </p>
          <p>
            Btw this background has been such a pain in the ass to configure
            istg
          </p>
          <p>
            Before you I was completely lost in this life, I probably said that
            a couple of time already but I truly want you to understand how lost
            I was. I was seeing myself in a middle of nothing, floating in life,
            and following people, experiences, but I was alone, and no matter
            who I had around me, I was just feeling that this life had no point,
            why working if I die at the end, why making friends, why should I
            love people and spend time doing things I don't like if I die at the
            end, just this infinite loop that made no senses and made me feel so
            lost and trapped in this life. That's why I had ldr at first, for me
            it was an easy way to feel high emotions without too much to do for
            it, I didn't like to spend time with a person, even less intimacy,
            and I was just trying to give a kind of sense to a life that had
            none. Just imagine you are in space and drop apples on the air,
            there is no table, no gravity, so they just float and follow what
            was their initial movement NERDY I KNOW SHUT UP FSELBGSEBG, well
            that's how I felt, no basis, no fundations, nothing to really be
            attached to and no equilibrium in this life , and then a little
            piece of love came through Tumblr and just changed everything
          </p>
          <p>
            When you arrived I wasn't sure what was happening, but I felt that
            it was the beggining of something, I didn't know what and why but it
            was the beggining of something. You just are the beggining of my
            stable life, a life that makes sense, a life that has a beggining
            and an end, a life that I want to live and actually enjoy so
            freaking much, a life where I can take my own decisions and decide
            what to do in it, you just made me become someone. Okay that seems
            quite a lot but it is the truth, you are just making my life better
            every single second of it. Every time I smile is just a new I love
            you for you.. Today you are the most important thing I had in this
            life, I am not saying that I am emotionally dependent of you, even
            if that's a little bit the case, but you just taught me and made me
            become such a better person, I just like being myself and live
            thanks to everything we have together. You are my best friend, my
            love, my favorite human on this planet, my future wife, my ally, my
            family, my baby, my slutty princess, basically you are everything to
            me.
          </p>
          <p>
            I really have this feeling that I was 80% of myself, and now that
            you are in my life, you... are somehow a part of me, like I couldn't
            be myself entirely without you, you just complete perfectly the
            person I am and want to be and I will never be thankful enough for
            how much you make this life brigther. I know you don't feel the best
            about yourself, but you have to realize that even if you feel like
            you are pointless or exhausted of this life, there is a heart on
            this planet feeling that you are the absolute best thing humanity
            made, you are the most precious human being on this planet, and I
            will always, always, always love you and care about you as if you
            were the last element of a whole species.
          </p>
          <p>
            For everything you bring me and everything you did for me, I want to
            promise you a couple of things.. I want to promise you that I will
            always be there for you, always support you on every choice you
            make, always be there if anything goes bad, always tell you I love
            you when you think this life doesn't worth it, always reminds you
            how much you changed this world just by how bright your person is,
            always kiss you when you think nobody wants you, always listen,
            care, talk, share, dream about everything with you.. You can't
            imagine how scared and panicked I would have been if I knew I had to
            say that to someone one day, that seems like a way too big
            commitment, but with you it's just so easy, so obvious. I want you
            for this life, and if I end it with you, that would be the best
            thing possible..
          </p>
          <p>
            Your person is a poetry to me, I love every part of you as if they
            were the best thing I had ever seen in my life. And oh god when we
            met this became even more obvious. Every part of your body gives
            more sense to my life. The contact of your skin against mine made me
            realize how happy this life can make me feel, and how beautiful it
            is to love someone this much. Every time I felt your breathe,
            against me, saw your smile, your gaze in mine, everytime I saw you
            replacing your hair, take off a clothe, turn around, move your
            hands, arms, walking, hugging, fucking, everything is just a piece
            of art I want to store in a corner of my brain for the rest of my
            life.
          </p>
          <p>
            If before dying we really see our life all over again, I want most
            of it to be on your side, I want you to be my last view, I want you
            to be the last thing I touch, I want your hand to be the last one I
            hold, I want our memories to be the only thing remaining in my mind,
            I want you to be my last thought.
          </p>
          <p>
            I want my last words to be I love you, and I will always love you.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Happy birthday my future wife and most precious thing I have.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            Yeah also I wanted to make this thing just to see how it works eheh
          </p>
          <Card>
            <Space direction='vertical'>
              <p>Will you be m the love of my life for the rest of it?</p>
              <Button
                style={{
                  height: `${sizeButton * 70}px`,
                  width: `${sizeButton * 100}px`
                }}
              >
                <a
                  href='https://www.youtube.com/watch?v=OGc9W-_C9u0'
                  target='_blank'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%'
                  }}
                >
                  Yes
                </a>
              </Button>
              <Button onClick={onClickNo}>No</Button>
            </Space>
          </Card>
        </Card>
        <Button onClick={handleLogout}>Leave</Button>
      </Space>
    </div>
  )
}

export default Hb
