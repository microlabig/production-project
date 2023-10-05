import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { Article, ArticleView } from '../../model/types/articleDetails';

const meta = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const article = {
    id: '1',
    title: 'Javascript newsJavascript newsJavascript newsJavascript newsJavascript newsJavascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: ['IT', 'POLITICS', 'SCIENCE', 'SCIENCE', 'SCIENCE', 'SCIENCE', 'SCIENCE', 'SCIENCE'],
    user: {
        id: '1',
        username: 'username',
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGBgYGhgaHBoaGBoaGhoaGhoaHBgaGBocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSQ0NDQxMTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xAA7EAACAQIEAwYEBQQBAwUAAAABAgADEQQSITEFQVEGImFxgZETMqHRQrHB4fAUUmJykgcz8RZTgrLS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EACkRAAICAgICAQMEAwEAAAAAAAABAhEDIRIxBEFREyIyYXGBsTPB8BT/2gAMAwEAAhEDEQA/APQy04DeMGsKiTaznpBKaXhxTEYghS8STZYkgbU4CokmDWdNO8ClRHGyuUQqIIdqMYRG5WTjQVFEKEkRaloenVvK2mMqCFIvhwgM7FsakRzTiFOGMaY1h4oGFgcRiUT5jOYrEZVJ9v1MwPaDjJFwCb68/wCWjxjyKpz4mh4j2mCXCWB67ynPFcS+vxGUedj6ASiwiN877nUA/h6ev5R74gxm4rSRIRlLbf8ABok45UT8bN5kH85Nodo25qrdeR/npMj8S4vziSqbyttFyiej4LiCVdFNm/tOh8x1HlJJnm9DFkEakEag31B8JtODcT+MnetnX5rbEcmH8/OBMElRYkxsRM5eMLY7NFngyYiYaJyC5pzNBZos0FE5Bc0WaCzRFpKJyC54s0EGiJkolhc0QaCvHASUFMJmijIpAkZYdDGokT6R7KkqJlPadEjUq1oVniUEkLHEwCPYRjvBxsaySxvBOkajx95Kolg2SR2e0lmBdBzhTANTFW3lRju1aISAwFofH4tFFusyGJwFN3K2uW5yUgqxY7tg+YsjaCa/sxxN8RQ+M/dUkhepC6M3lcEehmF4hwFKaAJq7EAeZ0AmzxeJWlTXDoLKihAeZy2BPrY+8LV6QqlVtg+O8TsGt0/8CYWihq1bn5V1PpsDLbiBLeI19ZUUMUaWay3vve/KWv7Y0iiP3SuRYV2kKpGDGs9yUyjkb/lpGZpnejekmrQdGtE7ayMX5RyNBYaCFpbcExxp1EY7Xsf9Tofv6SovHK2kgK0ens8YakjUnuqnqqn3F50tLkjM2F+LHB4C87eQActG5oK8WaSiBM87mgc0WaSiWFzxB4OOSSiWSaawwWBRoZWiMtj0LLFHXiihEKMHUoyZecJh5MWiv+GRO3kt5HqU+ka7BQ6mbxVJymCInQmQgwNJCNcQHw41HtIyB8RVCC5lLX44i3zSZxSoCtrzG9oOF1a9lpggdYtjVQHtD2mpv3UGvWUicWCWJbSV3Fez9akt23kejweoyFydBJYrs1/AuJCtiaKA3BqKxv8A494//WXvGwVqtfYnMPX97zF/9PKB/r6Z5LnJ/wCDAfUielcdwudCea3I625iDlUkMocoszOIcZf5zlfSwofU/KPqegkhKLVWyroo3PTUydXVVXKugG0mSdKkNgxW7fRSYtNbAeUiMQJPxOm5t7Ssci8pi37Nkor0KdDRAXicWjWVONDkaSaexkJW1k/BJnZV/uZV9yBGQjN9QWyIOiqPYCdMeROfDlyMrGXnLzpSGp4e8JErBqLwgomSUo2h1URXIZRIIw5jxhZNivByY3FEZ8PpIxQiWV5He0KYrigKQymMN+kdSBY2kZFoJeKSv6WKJaHoaY28OyQLLCmBoYWiLTjRjRhTpec+JGMI0ITIAeXjKlQWvI+McplC6sTsJOo4NzYkDWByQ6iynIDtztC4jiGQgWh+M1/gJewvMomJqV3sqyRVkk6G8X4ilR8rjSB4fwR3zC/cOwl8/As6d75oROHvTAs0dRSK3JszWO7N1aKl6LBGBzElsosBzbkIzhXaqqT8Kqge346brUBHU5CbesvMZV+M4wtYBkqXUi/gT+kzNfsUUxK1c6gL8qoDfNkCZiwAsO6DbrzlWRF+G/RfY/EilSJRQb62HjzmI4nxTEub00svXb3J0m841SVaSqfmN9ZmF4N8RFRiLLUV2U7Oq65NNrm2uu0oV2aWtaMy/C8U+ruvkrhiPaEwtOqj5XJYdSNbw9PsU6M7HKRbKhBAKj+45dS1gNdNyZYYbCMi5XdnsNzv7x2xYoGpMdWOk47ARrvpEstcdEbMS1htLXhXFEpVEZhmynUA8/O1riZ7FVWUG3PT7RtO2Q2FiLXgc2uhseGMuz27C1UqIrobqwuP38Y5xM/2MZhhVvzZiPLT9by6Z5qjbimc7IlGbivQdFEKhkHMY5XMLQikTy8E1SCpIzSzpYIW1iukOrl0QqeZto+opEs1phdhGMoJi8g8SuRGIjkw5Oplk1gsG1Rbbw8g8SMU5ASTQw4XWcaqiC8g1+JE7QbZNItf6hYpQ/HMUnAnIt3MC5hzIGNrBFLHlCgDmMj1cWi87zKcT489UhKN7k8vrO0cI6jvm7HeGycTR1+IKBddTHcMrl2sd/ylPSpgDvNlEt+DYpO8tEZj18YGyJUaCjgkU5rC/WcxOKVQdReVDYipqHJHlKniVUZSFvc8yYqg+2NyXSBV8cKtQh9r6eUuMHg0TVQJhKfD6rsSp05GW/DamIQZW1tL60UNrkat6mW5O0w3Hu05FQqmwltiuJM6lGBUnnMpjODX7yNeGKA2c4FjXfG0nc375Hh3lYD6kT0c0wW1/l55bhqb03RrWKMrf8SD+k9NesbXQBjbS5te/jy0lOdbTNPjPTRne1WIGfKDtpKnhWLDPa/pCdpXqrUzLRLgnS5svqQDb2lPSpv8dGVcoHzdAeYvz85S5I1qJrGRQNZQcRqAE2lpj6vdmYxtXW0RSLVHRHZ+cYakE7zjpcEXtcb9IRWANMsbtsDdQAfcyw4XgGxDqi6ZiCzEWso8Okg/1mQLpfaT6WPZFz02tfePHE3tlM/JjDUds9So01RVRRZVAAHgNI+8xvBu1mcBKm/WaHDcRRtA4vNPRgavZYkwmFZS2pkdmuIHLbaBkSo0aVFXaGGJFt5mkqMOcVXEMInEdSLnE8TCxicRzDSUnzamSMMRDxVB5MkV8exJF4JKh6wVVLGdRtIaQL2I1mO5jlaRQxvCh4RbD54oO8UA1F89a0zfFcbnzIBe/SMx+NZ+6n885AqcWTDg37zmL+wy+Skp4hcPUtaxPMyTV44dlGZjK/Eo2JcuRaS6fDgq3HzfWFL5A3fRHp1Xd++2nTlPQeyWCyJmGgMyGA4aSLuN56RwnDhKaqOkE3SJFBcSqgEsBMNxXENVqZKa2U6E2m2xtVQLNKB8RTVrgASQJIdgsGKaAe8MaYnGrAi4MhYnHhQQN5b2VaKnj+NVLqBdpjVrOGNmIPSaLHgAM7G7TLPXOa4EsXRWya2Jdu4Rc/bWarszxpKuGD3INI5HuO93RdTbxFvYzCviNbg2I19ZZ8Or/Cb+pojRrCtSHh+JPEakeo8sfkycafr/AGbvCjGVp9+i24t2iTU6jNpY6WtrexF7ylHGKZPzgX66H2M0Vek1RRUQqyut16WPS4+koMTw501axlDkjdxVa7J2Jq9y51mZxVXWTq+NIBB2mexeLAvrFQU9BmrQGIxt+6Oekrs7v8osOZOgHrJeFw4Gg7x5sdh5CCU0iRg5MmONbNawAta19oWix2Gg9z6mEoYIbnUw9LCi9ryl5pNVbL4+PjvlSsPSw4YEkcjqNx5GM4BxEK4z3BhqLlA3+p/KVNQBtRoZs8O3F2c3z+Kmkl6PU8Fjkcd1hJeaeW8Ix5puNTvPRsFiA6hr30mtoxJkkmcZoFr3uImciAgbNpHYfSBpvDoZAoI+ogkaPd9JEvAgsksvONVo1jcQY0hATLxSPnnYKGtFBxDjKhvh0hduZkBMAWbO9yfGWHAuFg99h3m1mhq00tlA1irQeyhwuCZjYaCXOAwCZ9W2io4a+2kl4Tg53185CEqsKabWh6PGAO7YmOw3CANWN5YLhEA+UQNr2Qy3F+Ju97Cw5SoxKOEzE78pI7YY8JUVEte+0JhaRcBnFvCWxWiuT3Rn34hXAsAYSliiFF9WO81Zwi22Eg1OHrmta0dMWigannJzbecouJYV1NwO7NfjOGldVlNVcschGg3J5fvI5pK2SMHJ1HbMmEZmsouektMEjU2zF/AhRcEdCdIerlUlUFr7nmf28ICsTlbLYBACzk2Ck7DzNvp4Tm5vJcriujseP4ShU59/0WOE4wMPmpnWmVNRQN0JcK4A2tc3ty1hBxVcWGFAFiujA90g/wDyteZ/FrZqXLLe9/xI4INuTb3gexlU0nqhrqW2v62PjKcbfH9i7KkpWvYuK0aoJzLbwGv5StSjlXM6DMSbZtbKAOW299+k0mLxDMzZrC2530BmfxdcMxPIaCVfVb1RZHEou2DRSx1/8ekm0lCytfHAbCDOLZvKNxkwucS9FfmDp5TtOtqNZUDFPawX3NhOI7nW/toPcyODYVNIvcXW0tzJt7b/AKSCQQYxa4NszG42trvv0ncRjUG4P0H3m/x5whCm9nK8rFkyZHJLQ/4ebVd5edn+LMjBH2maw3EUzXUP6DN72tLB3VznU6jfcEeYOomlZIy6ZklhnHbWj06mwIuOcHUJlB2b4oWGRuU0jayPQvYKk8kK0ABaODSMgZ20kfPcwpOkEo1kIGBnLzhMaTAQVjFO3ikITMWgoFEHTaDuXN1XWXeOw61CpI2jqVBU2ESKLJP4HYHCqqgtvJpqLsJDZo0NJxJyJj4kDaBbFyO7QZaFRQHJkLFcGpVHDsO9Jv8ARi2nKINHs8bYugDULSrrP3/KW7PI9TDhtecKYrRBquApZjYAXJmLx2LzsSNBy/nWW/arElMtIHfvN+g/nhM5sPE/SYfKy3LiukdjwcCjHm+3/R3B4Yu+Ub+nqdeQlV/S1Wzqhzoxs2U5RddgcwuD3pM4gz0h8RQXAU7A6G9rG2oBB38JBqYxwuRTlBGqrYC53vzJ8SbzFt7RudPTG18aWVKapZUOwZmGgyjly/SR67tyVr+RnVLBbC8S0qja2sPE2liSQtaI9RqtiCcoNibkXNhYX5yJ8Hq3tJ74Q/icemsGyIu1z5/tCqFkmRRSXkt/rHr52HQTr1Om0EbmMVtUEatyE4oLTiJCs9tpCfuDqMV0Ua8zBUqIJuxzcyOXvzie7aCPCWFve25+wh6BVs78e/dUacgB9p1HyG7Nl8M2b6WP5x7IVWyixPPYD7mCpYMHVhm89F+5hTI4sscNxZQwKNY32Ol/LWei8Ex4qoDzG88waqqi1l8goA/eAqcRdhlDEDaw0HqBvL453VPZkyeJG7To9bxPEaKfPUQHoXW/teAo8aw7aCsl/wDYD855VSpMZMTDAb/YSPyH8BXgxftnrKOCLggg8xqIxW1nl+G4p8BrpVK+ANwfMWsZqOF9tKD2WowRv7rHIf8A8+ukthmUu9GfL4rh+Lv+zXrBOeUVKoGAKkEHYg3B8jOldZcjKNtFFmihohrDUjGeBdwouZlOPdqVpgqpBMCVklKuzTV+IIguzATNcV7aU6d8pzHwnmfFu0VSoTdjbpeUb1WaRyigJSl+h6Gf+pbA/JpJWF/6kIfnQieYpSvJC0Iqk36C4r5PX8J27wzkAki/WX1DitJ9UdT6zwQUhHrXdLFXYesPJApn0EGvGYvGJSQu5sOXUnoB1nkfCe2lelYMc6y64vxX+pyup7pUWHT+763lWbJwjaNHi4fqz4vXsDisaa9V6raAnTwUbCQMfiQBDVUsmUczKrFOq6nU8h95zL5OzvqKjGl6D0eKEpTDEoKbkghc7OCdsu23d1O0NxviqvZEQqAQTsARY90AdDb2lRSu7AnmR7XEsalMHzglFWmKkQ3qNOPVa0kFINkhseiG7ExhWSzT6TjqB4noIbEaIDJHqkLl8I1xGEaoA7RqCFCX2F4VKdt4b0JxdjMltBvCUsPbU/vOh+QhGa0BYooaWA+/OQ6+IvGYitrYRtKkWMZL5Ek70geUsZYYbBjc6TuRUFzIzF6wOU5VG3+UPYtV+rJdfEKg095WPiXdsq6kwNPCOLjUg7W2v58pMQfCp922Yi7G406CNpdA5Sl3pDDw4DV21+n13kujwQuuZKVVl/uCEj0J39Jvey3CcOtNKuUO7AHO2up3y3+WXOJzMDl2HXb2maXkbodQj8GD7MY2rhagpvn+C5tZ1ZSjHZhfdetp6HKSs7AXdyB0HPyEWH4lUzCyXQczv6sZpw+YlqSMmfxG/uiXdpySg9H/ANxP+QnZu+tH5Rz/AKUvhlL2u7QZAUQ6855fj8WSTrcmTuNYolmYm5JMobkm5lk5VpFMY8vuY1EJ1hxS8JNw+HAGZtIyvihsolVFltg1AUax5caayMVJ3iyiQBJD3No2ot4MCTeGU8zgHYan02+pEEpJJtjQg5yUV7J+C4SuQNUvc65Qbacr87yzSwsqiyroAIqj6XjV0A8dZzZ5JS7PQ4sEMa0v5H137p9vvM/iQWYDrLnEvdR6n+e0rKKXcmLHSHkr0EQBdToF19BJFZrMRJHBsAK9cI2qU7O/+R/CnqfoDB8YTJVYbWZvz0+kVtN0BME7RjG84P3jWMA4VSIywjS0Y51jIVjntI7sLx7NIbH846K5BXeCYkxLrJC0wBeEFWNQZRcyFiK5N7RYvE3OkZQpExkvZXJ3pHcPSuZYqVRbn+eAiRAoueW8r6ztVYAfLyk7J+K/Uaxeu4AGl7ATRU8IaaAFe6osT53k3sxwsauRry9pVdsKzJkp3sSc5t4Gy/qZn+q55FBDJcIuT7INet321tYCw5WPOQnoFgTey8vHx8orZkDHUknTpY8unKafgfA81JWYkZlzeVybaHla0unkWNWyRXN7H8E4pUpUlRQLAHe+l/WBxvGqzOqBzuCQDYCxvsJZt2cYkAuRfw5dTJGO4ElJLouulydSfGY3mx3aW2aFHSSLDh9Ysmc2Fh3mIuT5X2hcMjVmF2ypyvuwHh0kNHJWlTQd17sx/wAV5S0wf/cPgpiYLlNX7YMiqDY2ogBOg9ooCq+p0M7OxUfg5tv5PMeKVLtadwWH/G2wgShepbxkzidUKAi8t5qk7bZy4qkkAxOIznTYRqpbUwNFYeo2loAsY7k7bRxpgCPSnpE40hoUJg8MznTQDcnYfeXeFoLTGmpO56/YSFwz/tkf5E/Qfz1lggvaYM85NuPo7XhYIqKn7Y9u8wWMr1dSPT2jlNs79LgSvovmJ8bzMb2w2MfRR4D7wasEUufTxPKEZMzfzlItzXqqi6qp9z1/nSN6Ek62bHsVhCtEu3zO2Y/oJV9saGWr/sFb9P0m24XhgiKvICZztxQ0puP8lPrqP1mWErnb9ir4Moh1MaW1nKZ3nAd5oosXQ13nXMAX7wHjDH8jGoFjHO8Cy6wmb6zgWMhWrH0U1kfH4j8Ih3fKvjK06mNFbsrnKlSFQpXNzJ9IAQSLpOO1/L84WxIqjleoXOUfKPrJeAw1rXlcMYqHXbwNz9ZMw/FaQ528wYsoya0hVOPLbN5wpbKJiO23exTDoFH0v+sveE8SUjusCOl5mu0NTPiHbxH0Ambx4OOVtlmZpx0V2EY6pzOo8T4eYm97IccR0XDvcOi2B5Oi7DzA5eEwLUwfOEw2KqU3VxYshBBI105EjcHaasuJZItP/mUwm40eu4bFBy56HKPzP6QHH8SEQHKWzaactJS4HFs6tUw4zqxDMmbv03tZh4r0lxUu9OzjXpOROHCWzeqdSXRW8ErAsi31VXI5aG37ydwfEZ6rvfQMUA5aAfqZSq4SqjKQCpsRtdToR9Yfs1iQK1Sg25OYeOg+00Y9fcvWw5Y3Fr5LyoupihalRbm9veKdP68fk5nCXweZ8NW9Rm6XldiGzOfOKKbmcpdElE0jag1AiigAGTaMqLoZ2KMAmcLV2Q5Bc0+8dQO4SqnfpcGWyafWdinOz/kzueC28asBjmsgXrqZBwfzRRSmPRql+QTG1siE82uB4dft6y47CcNveo3L84oomT/GxZfn/BvHewlP2kw+bDv1Wz+2/wBLzsUxx/JBRgE0zRnWKKbhl0RFbvSUOcUUaQkQa6w5FhFFJ7G9FfUe5MjI3etOxS1GWXZIqNy94AjTn7xRRSSKisbkzgEUU1ejD7HjlaW2JHePkPyEUUqn2jRj/F/wAtEGiiijEjA4t6ThqbFW6jn4HqJuMJ2lpOty9mW2YZWtf/E22iilObFGa2Pjm4tUVWP4rTdiyAuSf9Vv431+k7xPBNnWsGKEAMADqp3Oo3iilM4qCXE14JObdkr/ANWUvxo2bnYC1/CKKKN/5ofqG2f/2Q==',
    },
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

export const Big: Story = {
    args: {
        article,
        view: ArticleView.BIG,
    },
};
export const Small: Story = {
    args: {
        article,
        view: ArticleView.SMALL,
    },
};
