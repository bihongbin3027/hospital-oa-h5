import styled from 'styled-components'

export const StaffInfo = styled.div`
  padding: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 80%,
    rgba(226, 244, 252, 1) 100%
  );
  box-shadow: 0px 2px 6px 0px rgba(209, 210, 210, 1);
  border-radius: 15px 15px 0px 0px;
  .left-user {
    flex: 1;
  }
  .right-photo {
    flex: 0 0 100px;
    .photo-box {
      height: 138px;
      background-color: #ddd;
      border-radius: 6px;
    }
  }
`

export const StaffCard = styled.div`
  padding: 15px;
  background-color: #fff;
  margin-top: 10px;
  .card-right {
    flex: 1;
  }
  .input-sy {
    border: 0 none;
    font-size: 14px;
  }
`
