# 환전 계산기 과제

![image](https://user-images.githubusercontent.com/108774881/217484659-17578798-aba1-4f87-b3cf-57d4bcca2e8d.png)

## 시연 영상

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/108774881/217489257-8dfe3432-f8ac-4c1e-b2e1-06eaae562ec0.gif)

###  사용 api
https://exchangerate.host/#/
#### 해당 과제 트러블 슈팅
<details>
<summary>2.환율 계산식</summary>
<div markdown="1">
  

|관련사항| 내용  |
|--------|----------|
|문제|  api에서 제공되는 환율은 USD 를 base 로 환율을 제공해주는데 USD 가 아닌 다른 나라와 다른나라의 통화를 환전하기 위해선 계산 식이 필요했다. |
|해결과정 설명|-해결방안- 환율 계산식이 어떻게 적용 되는지 직접 써보면서 파악 (USD 달러 / 해당 나라의 환율) * 다른 나라의 환율 을 계산하게 되면 환전 계산이 적용다라는것을 알았고 코드에 도입시켜봄.|
|과정1 | ![개선사항](![image](https://user-images.githubusercontent.com/108774881/217561326-c6796012-14ee-4ea7-a3e6-f10b5239371a.png)|


</div>
</details>
