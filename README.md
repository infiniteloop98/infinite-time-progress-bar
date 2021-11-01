# Infinite Time Progress Bar
#### Progress bar component based on Time

# Preview

![Preview](https://s21.picofile.com/file/8442750742/infinite_time_progress_bar.gif)

# Installation
`npm i infinite-time-progress-bar`

# Usage

1. include this files in your layout:

* `/dist/css/infinite-time-progress-bar.min.css`
* `/dist/js/infinite-time-progress-bar.min.js`

2. Put this html in your layout

```` 
<div id="my-time-progress-bar" class="infinite-time-progress-bar fade hide">
      <svg width="47" height="47">
        <circle
          class="time-progress-bar-circle"
          stroke="white"
          stroke-width="3"
          r="21"
          cx="75"
          cy="75"
        />
      </svg>
      <p></p>
</div>
````


3. Create new instance from InfiniteTimeProgressBar class
```` 
<script>
  const options = {
                 selector: "#my-time-progress-bar",
                 duration: 10000,
                 callback: yourCallbackFunction
              },
      progressBar = new InfiniteTimeProgressBar(options).render()
</script>
````
# Options

| option  | type | Description | default
| ------------- | ------------- | ------------- | ------------- |
| selector  | `string`  | Your element id or class | `.infinite-time-progress-bar`
| duration  | `integer` | Remaining time to execute callback function(based on millisecond, minimum: 1000) | 5000
| callback  | `function`| Callback function for execute when timer is ended | Void

# Donate

If this package is useful, you can donate from this ways:

### Cryptocurrencies:

#### Bitcoin - BTC:
Address: bc1qtzq68pnjecf00rn4qkejupx0l9jjcaxh33gnd3

#### Dogecoin:
Address: DM2iNgwmSY5obYpfEc9w8BhB4cvQ87Lbkz

#### Etherium - ETH:
Address: 0x92F2D8D41a919c81a9812B78367F4C82c8Bc18d8

#### Tether - USDT:
Address: TM4qiWApB2NyU2epVn5tfUd5ANstMQtkjK

#### Tron - TRX:
Address: TM4qiWApB2NyU2epVn5tfUd5ANstMQtkjK
