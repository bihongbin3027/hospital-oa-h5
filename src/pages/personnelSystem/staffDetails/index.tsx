import React from 'react'
import { Flex } from 'antd-mobile'
import {
  PageContainer,
  Wrapper,
  FontMd,
  FontXlg,
  FontXs,
  IconStyle,
  Hr,
  Subscript,
} from '@/style'
import { personTagIcon } from '@/utils/config'
import { TagUi } from '@/style/baseUi'
import { StaffInfo, StaffCard } from './style'

const PersonnelStaffDetails = () => {
  return (
    <Wrapper>
      <PageContainer>
        <StaffInfo className="m-t-sm">
          <Flex align="start">
            <div className="left-user">
              <Flex className="m-b-lg">
                <FontXlg>张三</FontXlg>
                <TagUi className="tag-primary radius-lg m-l-xs">
                  <FontXs>男</FontXs>
                </TagUi>
                <TagUi className="tag-primary radius-lg m-l-xs">
                  <FontXs>维吾尔族</FontXs>
                </TagUi>
                <TagUi className="tag-green radius-lg m-l-xs">
                  <FontXs>肛肠科</FontXs>
                </TagUi>
                <TagUi className="tag-delete radius-lg m-l-xs">
                  <FontXs>离职</FontXs>
                </TagUi>
              </Flex>
              <div className="color-text-subhead m-b-lg">工号：0006</div>
              <div className="color-text-subhead m-b-lg">政治面貌：党员</div>
              <div className="color-text-subhead m-b-lg">户口：非深户</div>
              <div className="color-text-subhead m-b-lg">
                籍贯：江西省南康市
              </div>
              <div className="color-text-subhead m-b-xs">
                联系电话：13412345678
              </div>
            </div>
            <div className="right-photo">
              <div className="photo-box"></div>
            </div>
          </Flex>
        </StaffInfo>
        <StaffCard>
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd className="m-b-lg">基本信息</FontMd>
              <div className="color-text-subhead">
                <Flex className="m-b-lg" justify="between">
                  <Flex.Item>健康状况：健康</Flex.Item>
                  <Flex.Item>婚姻状况：已婚</Flex.Item>
                </Flex>
                <div className="m-b-md">
                  计生状况：
                  <input className="input-sy" placeholder="请输入计生状况" />
                </div>
                <Hr />
                <div className="m-t-md m-b-lg">出生日期：1965-06-30</div>
                <div className="m-b-lg">生份证号：450123456789322554</div>
                <div className="m-b-lg">
                  现住地址：广东省深圳市龙岗区体育新城大运路1号
                  北京中医药大学深圳医院
                </div>
                <div className="m-b-lg">联系人：李四</div>
                <div className="m-b-xs">联系电话：123 4567 8932</div>
              </div>
            </div>
          </Flex>
        </StaffCard>
        <StaffCard>
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd className="m-b-lg">在岗信息</FontMd>
              <div className="color-text-subhead">
                <div className="m-b-lg">人员类别：职员</div>
                <Flex className="m-b-lg" justify="between">
                  <Flex.Item>所在职位：工勤技能人员</Flex.Item>
                  <Flex.Item>岗位类别：其他专业</Flex.Item>
                </Flex>
                <Flex className="m-b-lg" justify="between">
                  <Flex.Item>所在科室：信息科</Flex.Item>
                  <Flex.Item>
                    转载至状态：<span className="color-text-delete">离职</span>
                  </Flex.Item>
                </Flex>
                <div className="m-b-lg">技术资格：信息系统管理工程师</div>
                <div className="m-b-xs">职称等级：中级</div>
              </div>
            </div>
          </Flex>
        </StaffCard>
        <StaffCard>
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd className="m-b-lg">教育背景</FontMd>
              <div className="color-text-subhead">
                <div className="m-b-lg">受教育时间：2000.09-2004.06</div>
                <div className="m-b-lg">毕业院校：中山大学</div>
                <div className="m-b-lg">专业名称：信息管理</div>
                <Flex className="m-b-xs" justify="between">
                  <Flex.Item>最高学习：博士研究生</Flex.Item>
                  <Flex.Item>最高学位：博士</Flex.Item>
                </Flex>
              </div>
            </div>
          </Flex>
        </StaffCard>
        <StaffCard>
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd>奖励信息</FontMd>
              <Flex className="m-t-lg" align="start">
                <Subscript>1</Subscript>
                <div className="m-l-md">
                  <div className="color-text-caption m-b-sm">2020.03.26</div>
                  <FontMd className="m-b-sm">全国十佳青年</FontMd>
                  <div>颁发机构：中华全国青年联合会</div>
                </div>
              </Flex>
              <Flex className="m-t-lg" align="start">
                <Subscript>2</Subscript>
                <div className="m-l-md">
                  <div className="color-text-caption m-b-sm">2020.03.26</div>
                  <FontMd className="m-b-sm">全国十佳青年</FontMd>
                  <div>颁发机构：中华全国青年联合会</div>
                </div>
              </Flex>
            </div>
          </Flex>
        </StaffCard>
        <StaffCard>
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd className="m-b-lg">技术资格</FontMd>
              <div className="m-b-md">
                <span className="color-text-caption">1、2019.06.30</span>{' '}
                信息系统管理工程师<span>（高级）</span>
              </div>
              <div className="m-b-sm">
                <span className="color-text-caption">2、2019.06.30</span>{' '}
                信息系统管理工程师<span>（高级）</span>
              </div>
            </div>
          </Flex>
        </StaffCard>
        <StaffCard>
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd>技能信息</FontMd>
              <Flex className="m-t-lg" align="start">
                <Subscript>1</Subscript>
                <div className="m-l-md">
                  <div className="color-text-caption m-b-sm">2020.03.26</div>
                  <FontMd className="m-b-sm">工勤技能人员</FontMd>
                  <div>颁发机构：中华全国青年联合会</div>
                </div>
              </Flex>
              <Flex className="m-t-lg" align="start">
                <Subscript>2</Subscript>
                <div className="m-l-md">
                  <div className="color-text-caption m-b-sm">2020.03.26</div>
                  <FontMd className="m-b-sm">技能人员</FontMd>
                  <div>颁发机构：中华全国青年联合会</div>
                </div>
              </Flex>
            </div>
          </Flex>
        </StaffCard>
        <StaffCard className="m-b-md">
          <Flex align="start">
            <IconStyle width={20} height={20} icon={personTagIcon} />
            <div className="card-right m-l-xs">
              <FontMd>培训记录</FontMd>
              <Flex className="m-t-lg" align="start">
                <Subscript>1</Subscript>
                <div className="m-l-md">
                  <div className="color-text-caption m-b-sm">
                    2018.03.26-2019.09.30
                  </div>
                  <div>
                    培训内容：关于信息工程管理前沿技术信息工程管理前沿技术的培训
                  </div>
                </div>
              </Flex>
              <Flex className="m-t-lg" align="start">
                <Subscript>2</Subscript>
                <div className="m-l-md">
                  <div className="color-text-caption m-b-sm">
                    2018.03.26-2019.09.30
                  </div>
                  <div>
                    培训内容：关于信息工程管理前沿技术信息工程管理前沿技术的培训
                  </div>
                </div>
              </Flex>
            </div>
          </Flex>
        </StaffCard>
      </PageContainer>
    </Wrapper>
  )
}

export default PersonnelStaffDetails
