import { Button, ButtonGroup, Link } from '@mui/material';
const header = () => (
    <>
        <h1><Link href="/" underline="none">메가브레인</Link></h1>
        <ButtonGroup size="medium" aria-label="large button group">
            <Button href="/member">회원</Button>
            <Button href="/project">프로젝트</Button>
            <Button href="/curriculum">커리큘럼</Button>
            <Button href="/apply">지원하기</Button>
        </ButtonGroup>
    </>
)

export default header;