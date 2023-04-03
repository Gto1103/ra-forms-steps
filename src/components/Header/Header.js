import './Header.css'

const Header = ({ header, action }) => {

	return (
		<header className={header}>
				<div className="header-data">Дата (ДД.ММ.ГГ)</div>
				<div className="header-distance">Пройдено км</div>
				<div className="header-action">{ action || 'Действия'}</div>
			</header>
	)
}

export default Header;