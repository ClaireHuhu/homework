<template>
  <div>
    <div class="table-header">
      <span>SDK Management</span>
      <div class="addBtn-container" @click="addSDK">
        <i class="el-icon-plus" style="font-weight:bolder;font-size:12px;margin: 0 15px 0 5px;"/>
        <span>Create SDK</span>
      </div>
      <div class="search-container">
        <i class="el-icon-search" style="color:#ddd;font-weight:bolder;font-size:18px;margin: 0 5px;"></i>
        <input placeholder="Search client name,board name,tags,requestor" v-model.trim="searchData"/>
      </div>
    </div>
    <div class="table-container">
      <el-table :data="displayData" style="width: 100%" stripe>
        <el-table-column prop="client" label="Client name" min-width="200">
          <template slot-scope="scope">
            <span v-html="showData(scope.row.client, searchData)"></span>
          </template>
        </el-table-column>
        <el-table-column prop="board" label="Board name" min-width="200">
          <template slot-scope="scope">
            <span v-html="showData(scope.row.board, searchData)"></span>
          </template>
        </el-table-column>
        <el-table-column prop="tags" label="Tags" min-width="180">
          <template slot-scope="scope">
            <span color="#ddd" disable-transitions v-for="tag in scope.row.tags" :key="tag" class="tag">
              <span v-html="showData(tag, searchData)"></span>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="requestor" label="Requestor" min-width="180">
          <template slot-scope="scope">
            <span v-html="showData(scope.row.requestor, searchData)"></span>
          </template>
        </el-table-column>
        <el-table-column prop="sdk" label="SDK script" min-width="120">
          <template slot-scope="scope">
            <a v-if="scope.row.sdk" :href="scope.row.sdk" style="text-decoration: none;">&lt;/&gt; SDK</a>
          </template>
        </el-table-column>
        <el-table-column label="Actions" width="100">
          <template slot-scope="scope">
            <i class="el-icon-edit action"  @click.prevent="editRow(scope.$index, displayData)" ></i>
            <el-popconfirm title="Are you sure to delete this?" @confirm="deleteRow(scope.$index, displayData)" cancel-button-text="cancel" confirm-button-text="confirm" >
              <i slot="reference" class="el-icon-delete action" ></i>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <div class="total">Total: {{displayData.length}}</div>
    </div>
    <!--dialog-->
    <el-dialog :visible.sync="dialogVisible" :title='dialogTitle'>
      <el-form label-position="top" :model="formData" :rules="rules" ref="sdkForm">
        <el-form-item label="Client name :" prop="client">
          <el-input v-model="formData.client"></el-input>
        </el-form-item>
        <el-form-item label="Board :" prop="board">
          <el-input v-model="formData.board"></el-input>
        </el-form-item>
        <el-form-item>
          <template slot="label">
              <span>Tags 
                <el-popover title="Please separate multiple tags with commas." trigger="hover">
                  <img src="../assets/ESM@iconset_info2.png" slot="reference" style="width:20px;height:20px;vertical-align: -4px;"/>
                </el-popover>
                  :
              </span>
          </template>
          <el-input v-model="formData.tags"></el-input>
        </el-form-item>
        <el-form-item label="Requestor :" prop="requestor">
          <el-input v-model="formData.requestor"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="text" @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SDKManagement',
  data() {
    return {
      searchData: '',
      tableData: [
        {
          client: 'Worker Training',
          board: 'Admin Supports',
          tags: ['Story'],
          requestor: 'Kleven Yu',
          sdk:'javascript:void(0)',
        },
        {
          client: 'Order Profile Maintain',
          board: 'One Tools',
          tags: ['Onescr'],
          requestor: 'Colin Ciao',
          sdk:'javascript:void(0)',
        },
        {
          client: 'China Tools Enhancement',
          board: 'China Tools Enhancement',
          tags: [],
          requestor: 'Mark Zhu',
          sdk:'javascript:void(0)',
        },
        {
          client: 'Hyve - Commercial Invoice',
          board: 'Hyve - Commercial Invoice',
          tags: ['KWO 4.11','AODA/WCAG','+2'],
          requestor: 'Elsa Li',
          sdk:'javascript:void(0)',
        },
        {
          client: 'VOB Process Route',
          board: 'MyCIS - WebQuote',
          tags: [],
          requestor: 'Jaden Cheng',
          sdk:'javascript:void(0)',
        },
        {
          client: 'ORM CVS Review',
          board: 'ORM feedback',
          tags: ['Summary','Material'],
          requestor: 'Rick Hua',
          sdk:'javascript:void(0)',
        }
      ],
      dialogVisible: false,
      dialogTitle: '',
      formData: {
        'client': '',
        'board': '',
        'tags' : '',
        'requestor': ''
      },
      rules: {
        client: [
          { required: true, message: 'Please input Client name', trigger: 'blur' },
        ],
        board: [
          { required: true, message: 'Please input Board', trigger: 'blur' },
        ],
        requestor: [
          { required: true, message: 'Please input requestor', trigger: 'blur' },
        ]
      },
      editIndex : -1
    }
  },
  methods: {
    deleteRow(index, rows) {
      let realIndex = this.tableData.indexOf(rows[index])
      this.tableData.splice(realIndex, 1);
    },
    editRow(index, rows) {
      this.editIndex = this.tableData.indexOf(rows[index]);
      if (this.$refs.sdkForm) {
        this.$refs.sdkForm.resetFields();
      }
      let tem = Object.assign({},rows[index]);
      tem.tags = tem.tags.join(',');
      this.formData = tem;
      this.dialogVisible = true;
      this.dialogTitle = 'Edit SDK';
    },
    addSDK() {
      if (this.$refs.sdkForm) {
        this.$refs.sdkForm.resetFields();
      }
      this.formData = {
        'client': '',
        'board': '',
        'tags' : '',
        'requestor': ''
      }
      this.dialogVisible = true;
      this.dialogTitle = 'Create SDK';
    },
    onSubmit() {
      this.$refs.sdkForm.validate((valid) => {
        if (valid) {
          let tem = Object.assign({},this.formData);
          tem.tags = tem.tags.trim().length == 0 ?[]:tem.tags.split(',');
          if (this.dialogTitle == 'Create SDK') {
            this.tableData.push(tem);
          } else if (this.dialogTitle == 'Edit SDK'){
            this.tableData.splice(this.editIndex, 1, tem)
          }
          this.dialogVisible = false;
        }
      })
    },
    showData(val, searchData) {
      const Reg = new RegExp(searchData, 'g');
      return val.replace(Reg, '<span style="color:red">$&</span>')
    }
  },
  computed:{
    displayData(){
      return this.tableData.filter(item => {
        let s = this.searchData;
        return item.client.includes(s) || item.board.includes(s) || item.requestor.includes(s)|| item.tags.join().includes(s)
      })
    }
  }
}
</script>

<style lang="less">
.table-header {
  overflow: hidden;
  margin-bottom: 10px;
  >span {
    font-size: 18px;
    color: #333F48;
    font-weight: bolder;
    float: left;
  }
  .search-container {
    float: right;
    width: 320px;
    height: 28px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-right: 8px;
    input{
      height: 100%;
      flex-grow: 1;
      margin:0;
      padding:0;
      border: none;
      font-size: 13px;
      &:focus {
        outline: none;
      }
      &::-ms-input-placeholder,&::-webkit-input-placeholder{
        color:#ddd;
      }
      
    }
  }
  .addBtn-container {
    float: right;
    height: 28px;
    background: #43b539;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 4px;
    cursor: pointer;
    span {
      font-size: 12px;
    }
  }
}
.table-container {
  .tag {
    background: #eee;
    margin: 5px;
    padding: 0 6px;
    border-radius: 6px;
    display: inline-block;
  }
  .action {
    margin: 0 6px;
    cursor: pointer;
  }
  .total {
    height: 58px;
    line-height: 58px;
    padding-left: 8px;
    color: #606266;
    border-bottom: 1px solid #efefef;
  }
}
</style>
