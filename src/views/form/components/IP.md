```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="IPv4">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        IPv4:[
            { pattern: regular.Ipv4, trigger: 'blur',message: "请输入正确的IP" },
            { required: true, message: '请输入' },
        ],
    });
```