<template>
  <div class="app-container" >
    <el-form label-width="100px">
      <el-form-item label="名字">
        <el-input input-width="800px" v-model="ucenter.nickname"  />
      </el-form-item>
      <el-form-item label="上传图片">
      <el-upload
        class="upload-demo"
        action="http://localhost:8002/eduoss/fileoss/upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
        :file-list="fileList"
         :limit="1"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，而且请先删除当前头像再操作
        </div>
      </el-upload>
       </el-form-item>

      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate"
          >保存修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import cookie from 'js-cookie'
import ucenterApi from '@/api/ucenter'
export default {
  data() {
    return {
      ucenter: {
        nickname: "",
        avatar: "",
      },
       fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      imageUrl: "",
      //头像上传
      imagecropperShow: false,
      imagecropperKey: 0, //上传组建的key值
      BASE_API: process.env.BASE_API,
      saveBtnDisabled: false, // 保存按钮是否禁用,
    };
  },
  created() {
      //debugger
      var jsonStr = cookie.get("project_ucenter");
      //alert(jsonStr)
      if (jsonStr) {
        console.log( JSON.parse(jsonStr));
        this.ucenter = JSON.parse(jsonStr)
        this.fileList.pop();
        this.fileList.push({name:this.ucenter.nickname,url:this.ucenter.avatar})
      }
  },

  methods: {
    saveOrUpdate() {
      // 根据是否已经生成id来判断进行保存数据还是更新数据
      this.updateInfo();
    },

    // 保存
    updateInfo() {
      console.log("debug update info ")
      ucenterApi.update(this.ucenter)
        .then((response) => {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
        })
        .catch((error) => {
          console.log("fail");
          console.log(error);
        }); //请求失败
    },
    handleAvatarSuccess(res, file) {
      this.fileList.pop();
      this.ucenter.avatar = file.response.data.url
      this.fileList.push({name:this.ucenter.nickname,url:file.response.data.url})
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
     // console.log(file.response.data.url);
      console.log("debug")
    },
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>