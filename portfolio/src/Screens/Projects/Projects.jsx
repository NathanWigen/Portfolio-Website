import React from 'react'
import "./Projects.css"

export default function Projects() {
  return (
    <div>
      <div>
        <h2 className="projects-header">Projects</h2>
      </div>
      <div className="website-preview">
        <a href="https://nathanwigen.github.io/Weather-Today/" className="website-link">Weather-Today</a>
        <a href="https://github.com/NathanWigen/Weather-Today"><img src="data:image/png;base64,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" alt="github logo"  className="github-link"/></a>
        <p className="website-description">Weather-Today uses Oceandrivers API to provide weather data based on the location the user entered.</p>
        <img src="https://i.imgur.com/EUQkYKg.png" alt="weather-today-homepage" className="website-image"/>
      </div>
      <div className="website-preview">
        <a href="https://distracted-chandrasekhar-f865bc.netlify.app/" className="website-link">Review Your Game</a>
        <a href="https://github.com/NathanWigen/Review-the-Game"><img src="data:image/png;base64,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" alt="github logo" className="github-link"/></a>
        <p className="website-description">Review Your Game uses Airtable API to store the review of the video game that the user played and the front end makes a API call to grab the review infomation and render it back to the user.</p>
      <img src="https://i.imgur.com/3MWr9zt.png" alt="review-your-game-homepage" className="website-image"/>
      </div>
      <div className="website-preview">
        <a href="https://root-green-transport.netlify.app/" className="website-link">Root</a>
        <a href="https://github.com/allicue/root"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACOjo77+/uxsbFsbGzAwMDi4uKBgYHn5+fZ2dlycnLJycmnp6fw8PD4+PiampqHh4fR0dFlZWV4eHhSUlIdHR0wMDC1tbVYWFiXl5cMDAwmJiby8vLS0tLr6+tEREQtLS1dXV0WFhY9PT1KSkqioqI2NjYeHh4+Pj54NM96AAAKZUlEQVR4nO1d62KiOhBe1IJarFq13letWrvv/4KnVqygcwskmexZvr9tkA/C3Gfy61eNGjVq1KhRo0aNGv8GmpukG7cW7fbzFe32ohd3k01f+9aqoxsvRsfpMkIwPY4acVf7JsuiMxvvMGZ32D23Eu3bNUMz+XgSkrthNEj+kk37Eo9PxvQumD7HG+3b59CczdGPTobJLOQ3GY+qscswn2kTgZE03qzw+8YwPAEbz+3R+8Yk1qZUQG9nmd8Zqw9tWlesBw7oXdBYa5P7Qv9j74zgFxbqHHsrl/y+sF+o8kstik8USz2Z07UtPzEcf6vwaw498TtjrGDopK4/wCL2vrfq2o59ZoK5V6M8rWhel4PH19jW4PeFcdMPv2SqRPDra/RikM/U+J3Rck/Qp46AMHbMr39UJhhFB6eWauLUypbC4ceYanPL4ExttLSZ/aDnhuCHNq8cnLhUC21WBQztE2xoc7qDda2hrQYfYZliaG/wDKsU3UXTqsDitxiSFM2jYYugpq29GrbSl/V6nXxAMQVLevEV/OFv0ylJW087d/RGcd4hhMIKVqyb5PG6y7TwD7MnF0HF+UOaDaJowUbtA3f/ENxbx+Y5XxpDKO0NUFxW9zQmj1d9gv5v/WExdoPE8n8D/7qtShDS9Njmj7eW+KHhmB3w3xXVYgzdAR6dTYE3bor2C347YAisUmCjA11xQq1Iy1YpZJiTogN2UKtIG/B2mWc2g+IAn4d5u93uZWiM34+g+C0KaQAgw7fyBGFrlJNeuYTGafK0iF8TeEXnd9oazg85AcWbYfBXUPpThFR9FE35hd2vGzmOP7obSQR3k8SD8fwziv4IdhtiIJdU/H049yJ6YMblTf2+6GtCIkX7cloRid07ipHI0IfvKRqVuRikXs/QrbHDRDUnoiAg+cE9oa48ALMO9+ZJG8yr31q/aSOg0ZS26ZUAj+KCUjveHnrYfRnrfTTH6yCMZwJYg50xt3UhVVFK7C1TpYhbl8oFdQTDpcl1iAxFGbFsEaAvkMGk0o+oJHl1dvMibAiGBhqDSjIFzFD+Epu7cBlSuzRaSq0RMk8YMsNoILwKWU2izJCQpV/Yyy4CxmZ+oCxLmUS7LGZDR8yUNT6TaV9JrtGlr6FstXFpPskWe6YvoWx5vzMMBdbpC3OJk27TDnN3Egcdd08ydDzwQMF8QpGkSoMt61JtSuKT0VPOdOMf0rMXKghodfgNTtbwNRc6dfNX8Plo7g2wpXlSw8gVGFH/BXo9FkL8AZmW8QEsYnoD7aOzFdz6Xaxs/SCtsbnV2nv0DDYPS0lTbpOyotgHWHFPSVOuNCiMvk7OcqOCw4y633qiwIB7iQd8KRkECeYVEuHqDLhtSvu+0ckjCRJcvTnuBzMGTTht8kzfHJ7EZWpFPFJgwEjEEybyGXNB2bvPgzNssKgiow1DGrDCKAxMJNLO1x+vFBgwfjpWWkub7QFtUi4wjPoHn+Qq5VDwHRjbBFlFrnkLa2zMmGYI19fQxpC6Y1gE4+vDxje9SHd4wwMY2xSOzNNqNBSbNANUnJ0D7F7QolTfuS+CrmOFQ9+07+yZAAt6JgdcQEmas8LMnD/QESWwqHZN1tob1uO4BxOQgnIPdDjZWouRLTDqAqoBo+VvCEG2AhhvHbLA8EKvv5EhpPLp0EAwk8WuYCIZUDyC/nSV0/ePYBhCe452uf42hpCvR3ejB8eQ+Q7NGQb3HTIMoXAbHUoMTpYy+vD/zxDqkaQZBhWlOYMJmZozVK1PgMDE56FdSkuawIIYeGtJBsgFpvWhqCTOJ5gMBPRVMe6IdwoMmF5VKKzEKBjvFGg0mfQTpL8ZMyiw4cxM0BtMITIMA4u1cZluyLeg/UMfw+5MwHxToH/IPBVwkIIeuNImqPruhZ76EEwS/wKu4gRMdjLSSbVy9h5rZprKHswj/aEXBZVd4+pMd+AqpkolqNQMV2Z6BFcxhf7KRfpFcIW+sKPAmG1v6vPfc6DT1Zg7W0bFKIEtT4SLm7hOC+N+cHdgS/YRG5NZZdRn6xbsrGZkHadFdav0c+DMbtQ84d59MLEadpNid8qJGmJAlF+wk5owN4ETNaEEvvlxxlgJHuc3S8YL+QAnL4jNxg7OC8INZuUMkZJnO/OCiCkyBV8RZULznWEBvERB+xoRUzqwi/0xwcCP9dsRMp8/uELdh2JVGh1wEYyV167+4rcZ2VPAt75pCxvJ1G3yJQgOd1Ddp5KzC2itzeqLSNUAb0qmwNKvYC24wlKvRU90BhMjKSTX2GpRFJ1RxAkKgTBWC0rJTmfg0g990TkrKjlv4QEi7Jwh3upToigRgpEkv8L2q1/w7tsblp7OIIgI7h4WnSaTR0ti6zd8KttaUfQpkIJ3hSrttH9e1O+07n5k6TErvBFPChdVNuUXFM9yuzv015t1Y3BIkejjye34h8BMt+C7+DmScGMws18WDrzZNZDEjHf5K3oodzM6H0X4yNv0/xcsi5XjbEZsdBioVIld4wRY537R7pm4S502Z7sHEiTEjbyZcbrF/n53xuPczXvc9EyPkpRbk1nyCnciNndp9EPLujGeljjL1UB/ZW1seGTt5SFF2bbpNsZSBV+AiSmZxfeJChMgprdqJBbe5Lo7KHsSr9Gk8UwnEklRMJ5wGqcVBpo3u/Hwnctf4zBrzbo2shGrkJjQcrtIS1rl3GgVGnAJDY6rr0KchID/WFmLtdLZYKaFd82rpD6iZgJa6le6V1EQzERBjN1BcPvO0IfzikS+yic3KhwWXcLuuNm7c3QYChzyKE2wwlGuZQpF+rc3tMeq9sC6lipVKWUJliu0z9WOrTCK0EOvYqeWVYUlfzP3c+jUnu6D/lpVieAIw033KLtt8pULuHxcFOXNW6VpUvxwUQir0rZUvsYRVzf93ujqxB3HFd2Mckq/gkmcjx9Q7nO/k6RxklQPaiAnMNGoEmjIT9h3fWz7BSWOpquWY8i7EF6ih+YnRaJCUIjcp+glH2POsPIIstxMFx/V+saur4X6l1uZnI/aRFPL1MY9dW7Gp4WrcTA8HttODuymhT1URJkxtDVT5sf49CBrjBja61T6yYy4H51ownBqMYd5/V335foGDN+syvarEHf+Eg0YWr6XzJOC+4ksQs7QunbOKLpOp0kZTh2kLrON6rhJT8hw6+QkzQvFpVvbTcZw66gS5ELxzWlqW8TQ3fC4i9G4dylQJQxd6qws7O4wsy1g6LZvPktwu6sz4Rm6Lm9NLp7GwdVO5Rge3ZdiXcuTGm5OPmYYeunybF7bjhou9AbN0Ndk/59K1nlsvUCBYvju78Ds11tUczJIX2yqX4Kh197AfiGDcnp/bjRaGSpqEpThxPfUCjSFUjEOgDFUaO5MkIKlilNeYIZjnf5c+GYcMJyrnTvRhZIM1hlOVXsegeJd2wy1pzf1H/IMVhmetPmdkW6dMdwG0JP7jdnKCcNJQLNUCp+jHYbLYUjn9pwx2Ntk+B7S67tiPVhZYdg5bHvarcYYmrOTBYa/QjhhEcfrKMBhtZaRtEOal1WjRo0aNWrU+GfwH2LZg2/a3kseAAAAAElFTkSuQmCC" alt="github logo"  className="github-link"/></a>
        <p className="website-description">Root is an application designed to provide sustainable transportation methods to users.</p>
        <img src="https://i.imgur.com/PRWnoZF.png" alt="root-homepage" className="website-image"/>
      </div>
      <div className="website-preview">
        <a href="https://nostalgic-haibt-252a42.netlify.app" className="website-link">Game-Thoughts</a>
        <a href="https://github.com/NathanWigen/Game-Thoughts"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACOjo77+/uxsbFsbGzAwMDi4uKBgYHn5+fZ2dlycnLJycmnp6fw8PD4+PiampqHh4fR0dFlZWV4eHhSUlIdHR0wMDC1tbVYWFiXl5cMDAwmJiby8vLS0tLr6+tEREQtLS1dXV0WFhY9PT1KSkqioqI2NjYeHh4+Pj54NM96AAAKZUlEQVR4nO1d62KiOhBe1IJarFq13letWrvv/4KnVqygcwskmexZvr9tkA/C3Gfy61eNGjVq1KhRo0aNGv8GmpukG7cW7fbzFe32ohd3k01f+9aqoxsvRsfpMkIwPY4acVf7JsuiMxvvMGZ32D23Eu3bNUMz+XgSkrthNEj+kk37Eo9PxvQumD7HG+3b59CczdGPTobJLOQ3GY+qscswn2kTgZE03qzw+8YwPAEbz+3R+8Yk1qZUQG9nmd8Zqw9tWlesBw7oXdBYa5P7Qv9j74zgFxbqHHsrl/y+sF+o8kstik8USz2Z07UtPzEcf6vwaw498TtjrGDopK4/wCL2vrfq2o59ZoK5V6M8rWhel4PH19jW4PeFcdMPv2SqRPDra/RikM/U+J3Rck/Qp46AMHbMr39UJhhFB6eWauLUypbC4ceYanPL4ExttLSZ/aDnhuCHNq8cnLhUC21WBQztE2xoc7qDda2hrQYfYZliaG/wDKsU3UXTqsDitxiSFM2jYYugpq29GrbSl/V6nXxAMQVLevEV/OFv0ylJW087d/RGcd4hhMIKVqyb5PG6y7TwD7MnF0HF+UOaDaJowUbtA3f/ENxbx+Y5XxpDKO0NUFxW9zQmj1d9gv5v/WExdoPE8n8D/7qtShDS9Njmj7eW+KHhmB3w3xXVYgzdAR6dTYE3bor2C347YAisUmCjA11xQq1Iy1YpZJiTogN2UKtIG/B2mWc2g+IAn4d5u93uZWiM34+g+C0KaQAgw7fyBGFrlJNeuYTGafK0iF8TeEXnd9oazg85AcWbYfBXUPpThFR9FE35hd2vGzmOP7obSQR3k8SD8fwziv4IdhtiIJdU/H049yJ6YMblTf2+6GtCIkX7cloRid07ipHI0IfvKRqVuRikXs/QrbHDRDUnoiAg+cE9oa48ALMO9+ZJG8yr31q/aSOg0ZS26ZUAj+KCUjveHnrYfRnrfTTH6yCMZwJYg50xt3UhVVFK7C1TpYhbl8oFdQTDpcl1iAxFGbFsEaAvkMGk0o+oJHl1dvMibAiGBhqDSjIFzFD+Epu7cBlSuzRaSq0RMk8YMsNoILwKWU2izJCQpV/Yyy4CxmZ+oCxLmUS7LGZDR8yUNT6TaV9JrtGlr6FstXFpPskWe6YvoWx5vzMMBdbpC3OJk27TDnN3Egcdd08ydDzwQMF8QpGkSoMt61JtSuKT0VPOdOMf0rMXKghodfgNTtbwNRc6dfNX8Plo7g2wpXlSw8gVGFH/BXo9FkL8AZmW8QEsYnoD7aOzFdz6Xaxs/SCtsbnV2nv0DDYPS0lTbpOyotgHWHFPSVOuNCiMvk7OcqOCw4y633qiwIB7iQd8KRkECeYVEuHqDLhtSvu+0ckjCRJcvTnuBzMGTTht8kzfHJ7EZWpFPFJgwEjEEybyGXNB2bvPgzNssKgiow1DGrDCKAxMJNLO1x+vFBgwfjpWWkub7QFtUi4wjPoHn+Qq5VDwHRjbBFlFrnkLa2zMmGYI19fQxpC6Y1gE4+vDxje9SHd4wwMY2xSOzNNqNBSbNANUnJ0D7F7QolTfuS+CrmOFQ9+07+yZAAt6JgdcQEmas8LMnD/QESWwqHZN1tob1uO4BxOQgnIPdDjZWouRLTDqAqoBo+VvCEG2AhhvHbLA8EKvv5EhpPLp0EAwk8WuYCIZUDyC/nSV0/ePYBhCe452uf42hpCvR3ejB8eQ+Q7NGQb3HTIMoXAbHUoMTpYy+vD/zxDqkaQZBhWlOYMJmZozVK1PgMDE56FdSkuawIIYeGtJBsgFpvWhqCTOJ5gMBPRVMe6IdwoMmF5VKKzEKBjvFGg0mfQTpL8ZMyiw4cxM0BtMITIMA4u1cZluyLeg/UMfw+5MwHxToH/IPBVwkIIeuNImqPruhZ76EEwS/wKu4gRMdjLSSbVy9h5rZprKHswj/aEXBZVd4+pMd+AqpkolqNQMV2Z6BFcxhf7KRfpFcIW+sKPAmG1v6vPfc6DT1Zg7W0bFKIEtT4SLm7hOC+N+cHdgS/YRG5NZZdRn6xbsrGZkHadFdav0c+DMbtQ84d59MLEadpNid8qJGmJAlF+wk5owN4ETNaEEvvlxxlgJHuc3S8YL+QAnL4jNxg7OC8INZuUMkZJnO/OCiCkyBV8RZULznWEBvERB+xoRUzqwi/0xwcCP9dsRMp8/uELdh2JVGh1wEYyV167+4rcZ2VPAt75pCxvJ1G3yJQgOd1Ddp5KzC2itzeqLSNUAb0qmwNKvYC24wlKvRU90BhMjKSTX2GpRFJ1RxAkKgTBWC0rJTmfg0g990TkrKjlv4QEi7Jwh3upToigRgpEkv8L2q1/w7tsblp7OIIgI7h4WnSaTR0ti6zd8KttaUfQpkIJ3hSrttH9e1O+07n5k6TErvBFPChdVNuUXFM9yuzv015t1Y3BIkejjye34h8BMt+C7+DmScGMws18WDrzZNZDEjHf5K3oodzM6H0X4yNv0/xcsi5XjbEZsdBioVIld4wRY537R7pm4S502Z7sHEiTEjbyZcbrF/n53xuPczXvc9EyPkpRbk1nyCnciNndp9EPLujGeljjL1UB/ZW1seGTt5SFF2bbpNsZSBV+AiSmZxfeJChMgprdqJBbe5Lo7KHsSr9Gk8UwnEklRMJ5wGqcVBpo3u/Hwnctf4zBrzbo2shGrkJjQcrtIS1rl3GgVGnAJDY6rr0KchID/WFmLtdLZYKaFd82rpD6iZgJa6le6V1EQzERBjN1BcPvO0IfzikS+yic3KhwWXcLuuNm7c3QYChzyKE2wwlGuZQpF+rc3tMeq9sC6lipVKWUJliu0z9WOrTCK0EOvYqeWVYUlfzP3c+jUnu6D/lpVieAIw033KLtt8pULuHxcFOXNW6VpUvxwUQir0rZUvsYRVzf93ujqxB3HFd2Mckq/gkmcjx9Q7nO/k6RxklQPaiAnMNGoEmjIT9h3fWz7BSWOpquWY8i7EF6ih+YnRaJCUIjcp+glH2POsPIIstxMFx/V+saur4X6l1uZnI/aRFPL1MY9dW7Gp4WrcTA8HttODuymhT1URJkxtDVT5sf49CBrjBja61T6yYy4H51ownBqMYd5/V335foGDN+syvarEHf+Eg0YWr6XzJOC+4ksQs7QunbOKLpOp0kZTh2kLrON6rhJT8hw6+QkzQvFpVvbTcZw66gS5ELxzWlqW8TQ3fC4i9G4dylQJQxd6qws7O4wsy1g6LZvPktwu6sz4Rm6Lm9NLp7GwdVO5Rge3ZdiXcuTGm5OPmYYeunybF7bjhou9AbN0Ndk/59K1nlsvUCBYvju78Ds11tUczJIX2yqX4Kh197AfiGDcnp/bjRaGSpqEpThxPfUCjSFUjEOgDFUaO5MkIKlilNeYIZjnf5c+GYcMJyrnTvRhZIM1hlOVXsegeJd2wy1pzf1H/IMVhmetPmdkW6dMdwG0JP7jdnKCcNJQLNUCp+jHYbLYUjn9pwx2Ntk+B7S67tiPVhZYdg5bHvarcYYmrOTBYa/QjhhEcfrKMBhtZaRtEOal1WjRo0aNWrU+GfwH2LZg2/a3kseAAAAAElFTkSuQmCC" alt="github logo"  className="github-link"/></a>
        <p className="website-description">Game-Thoughts is an application designed to allow users to review video games they played and start conversations thru a comment section</p>
        <img src="https://i.imgur.com/UlHrQyA.png" alt="game-thoughts-homepage" className="website-image"/>
      </div>
    </div>
  )
}
