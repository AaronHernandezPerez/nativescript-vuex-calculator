<template web>
  <div id="calculator">
    <Display />
    <div id="keyboard">
      <Key keybind="CE" />
      <Key keybind="C" />
      <Key keybind="<" />
      <Key keybind="/" />
      <Key keybind="7" />
      <Key keybind="8" />
      <Key keybind="9" />
      <Key keybind="x" />
      <Key keybind="4" />
      <Key keybind="5" />
      <Key keybind="6" />
      <Key keybind="-" />
      <Key keybind="1" />
      <Key keybind="2" />
      <Key keybind="3" />
      <Key keybind="+" />
      <Key keybind="+-" />
      <Key keybind="0" />
      <Key keybind="," />
      <Key keybind="=" />
    </div>
  </div>
</template>

<template native>
  <StackLayout id="calculator">
    <Display colspan="4" row="0" />
    <GridLayout id="keyboard" columns="*, *, *, *" rows="*, *, *, *, *" color="black">
      <Key keybind="CE" column="0" row="0" />
      <Key keybind="C" column="1" row="0" />
      <Key keybind="<" column="2" row="0" />
      <Key keybind="/" column="3" row="0" />
      <Key keybind="7" column="0" row="1" />
      <Key keybind="8" column="1" row="1" />
      <Key keybind="9" column="2" row="1" />
      <Key keybind="x" column="3" row="1" />
      <Key keybind="4" column="0" row="2" />
      <Key keybind="5" column="1" row="2" />
      <Key keybind="6" column="2" row="2" />
      <Key keybind="-" column="3" row="2" />
      <Key keybind="1" column="0" row="3" />
      <Key keybind="2" column="1" row="3" />
      <Key keybind="3" column="2" row="3" />
      <Key keybind="+" column="3" row="3" />
      <Key keybind="+-" column="0" row="4" />
      <Key keybind="0" column="1" row="4" />
      <Key keybind="," column="2" row="4" />
      <Key keybind="=" column="3" row="4" />
    </GridLayout>
  </StackLayout>

  <!-- </StackLayout> -->
</template>

<script>
import Display from "./Display";
import Key from "./Key";

export default {
  name: "Calculator",
  components: {
    Display,
    Key
  }
};
</script>

<style scoped>
#calculator {
  font-size: 10vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #000000;
  background-color: #000000;
  padding: 8px;
  overflow: hidden;
}

#keyboard {
  flex-grow: 1;
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: repeat(4, 1fr);
}
</style>

<style scoped native>
#calculator {
  font-size: 50;
}
</style>
