<template>
    <div>
        <h-doc-cell
            title="2018号文件第三空间发挥双实际宽度和空间暗红色的"
            subTitle="35.5k"
            image="static/images/pdf.png"
            :iconFont="iconFontClass"
        ></h-doc-cell>
    </div>
</template>

<script>
import { HDocCell } from "vux";

export default {
    components: {
        HDocCell
    },
    data() {
        return {
            iconFontClass: {
                iconClass: "ic-daiban-l",
                fontSize: "48px",
                color: "#47B3E1"
            }
        };
    }
};
</script>

<style scoped>
</style>
