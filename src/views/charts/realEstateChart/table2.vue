<template>
    <div>
        <v-table
                border
                :data="tableData"
                style="width: 100%">
            <v-table-column
                    prop="class"
                    label="部门"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="project"
                    label="项目"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="content"
                    label="工作内容及目的"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="date"
                    label="时间要求"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="dutyName"
                    label="责任人"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="checkName"
                    label="检查人"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="failMoney"
                    label="未完成赞助"
                    width="180">
            </v-table-column>
            <v-table-column
                    prop="workState"
                    label="完成情况">
            </v-table-column>
            <v-table-column
                    prop="reason"
                    label="原因说明">
            </v-table-column>
            <v-table-column
                    prop="collapse2"
                    label="合并2"
                    sortable>
            </v-table-column>
            <v-table-column
                    prop="collapse3"
                    label="合并3">
                <template scope="scope">
                    <!--<div>{{renderScope(scope)}}</div>-->
                    <input type="text" v-model="scope.row.collapse3[scope.index]">
                </template>
            </v-table-column>
        </v-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        class:'行政部',
                        date: '2016-05-02',
                        name: '王小虎',
                        project:['行政体系建设','董事长报告培训 ','集团宣传片 /宣传册制作'],
                        content:['管理标准培训（1-2项）','结果汇报及公示','宣传册二稿校对，审核'],
                        address: '上海市普陀区金沙江路 1518 弄',
                        collapse1: ['红', '橙', '黄'],
                        collapse2: ['红1', '橙1'],
                        collapse3: ['a', 'b', 'c', 'd'],
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        collapse1: ['红', '橙'],
                        collapse2: ['红2', '橙2'],
                        collapse3: ['a', 'xs', 'c', 'd', 'a'],
                    },
                ],
            };
        },
        methods: {
            renderScope(scope) {
                return scope.row.collapse3[scope.index];
            },
            handleClick() {
                console.log(this.tableData[0].collapse3);
            },
        },
    };
</script>