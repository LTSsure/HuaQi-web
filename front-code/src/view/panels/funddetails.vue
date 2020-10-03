<template>
    <div class="demo-split">
        <Split v-model="split2" mode="vertical">
            <div slot="top" class="demo-split-pane">
                Top Pane
                <p>基金名称</p>
            </div>
            <div slot="bottom" class="demo-split-pane">
                Bottom Pane
                <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                Left Pane
                <Tabs name="tab" value="a">
                    <TabPane label="单位净值" name="a" tab="tab">
                        <Tabs name="tab-2a" value="2a1">
                            <TabPane label="三个月" name="2a1" tab="tab-2a">三个月的内容</TabPane>
                            <TabPane label="近一年" name="2a1" tab="tab-2a">近一年的内容</TabPane>
                            <TabPane label="成立以来" name="2a1" tab="tab-2a">成立以来的内容</TabPane>
                        </Tabs>
                    </TabPane>
                    <TabPane label="累计净值" name="b" tab="tab">
                        <Tabs name="tab-2b" value="2b1">
                            <TabPane label="三个月" name="2b1" tab="tab-2b">三个月的内容</TabPane>
                            <TabPane label="近一年" name="2b1" tab="tab-2b">近一年的内容</TabPane>
                            <TabPane label="成立以来" name="2b1" tab="tab-2b">成立以来的内容</TabPane>
                        </Tabs>
                    </TabPane>
                </Tabs>
            </div>
            <div slot="right" class="demo-split-pane">
                Right Pane
                <p>基金概况</p>
            </div>
        </Split>
            </div>
        </Split>
    </div>
</template>
<script>
export default {
  data () {
    return {
      split1: 0.5,
      split2: 0.5
    }
  }
}
</script>
<style>
    .demo-split{
        height: 400px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
